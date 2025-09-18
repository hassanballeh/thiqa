"use client";
import React, { useEffect, useState } from "react";
import CustomField from "@/components/Custom/CustomField";
import CustomButton from "@/components/Custom/CustomButton";
import { ENDPOINTS } from "@/app/api/api";
import Axios from "@/app/api/axios";
import { getCountries } from "@/services/get_all_select";
import SelectField from "@/components/Custom/SelectField";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { Country, Option } from "./Tutor";

type FileValue = FileList | null;

interface FormValues {
  name: string;
  emailFrom: string;
  phoneNumber: string;
  residenceCity: string;
  country: Option | null;
  age: string;
  positionType: Option | null;
  workPreference: Option | null;
  desiredPosition: Option[];
  linkedinProfile: string;
  resume: FileValue;
  supportingDocuments: FileValue;
  videoSubmission: FileValue;
}

const JoinTeam: React.FC = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState<Option[]>([]);
  const [desiredPositions, setDesiredPositions] = useState<Option[]>([]);
  const [positionTypes] = useState<Option[]>([
    { value: "Full-Time", label: "Full-Time" },
    { value: "Part-Time", label: "Part-Time" },
    { value: "Internship", label: "Internship" },
  ]);
  const [workPreferences] = useState<Option[]>([
    { value: "On-site", label: "On-site" },
    { value: "Remote", label: "Remote" },
    { value: "Hybrid", label: "Hybrid" },
  ]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { desiredPosition: [] },
  });

  useEffect(() => {
    getCountries()
      .then((data: Country[]) =>
        setCountries(
          data.map((c) => ({ value: c.id.toString(), label: c.name }))
        )
      )
      .catch(console.error);

    setDesiredPositions([
      { value: "Marketing", label: "Marketing" },
      { value: "Social Media Manager", label: "Social Media Manager" },
      { value: "Sales", label: "Sales" },
      { value: "Graphic Designer", label: "Graphic Designer" },
    ]);
  }, []);

  const appendFiles = (formData: FormData, key: string, files: FileValue) => {
    if (!files) return;
    Array.from(files).forEach((file) => formData.append(key, file));
  };

  const onSubmit = async (data: FormValues) => {
    try {
      setIsLoading(true);
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("emailFrom", data.emailFrom);
      formData.append("phoneNumber", data.phoneNumber);
      formData.append("residenceCity", data.residenceCity);
      formData.append("country", data.country?.value || "");
      formData.append("age", data.age);
      formData.append("positionType", data.positionType?.value || "");
      formData.append("workPreference", data.workPreference?.value || "");
      data.desiredPosition.forEach((pos) =>
        formData.append("desiredPosition[]", pos.value)
      );
      formData.append("linkedinProfile", data.linkedinProfile);

      appendFiles(formData, "resume", data.resume);
      appendFiles(formData, "supportingDocuments", data.supportingDocuments);
      appendFiles(formData, "videoSubmission", data.videoSubmission);

      const response = await Axios.post(`${ENDPOINTS.joinTeam}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      reset();
      toast.success(t("messsage.success"));
      console.log("✅ Success:", response.data);
    } catch (err: unknown) {
      const error = err as AxiosError<{
        message?: string;
        errors?: { msg: string }[];
      }>;
      if (error.response?.data) {
        const { message, errors } = error.response.data;
        if (errors?.length) {
          toast.error(errors.map((e) => e.msg).join("\n"));
        } else if (message) {
          toast.error(message);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mt-6 p-4"
    >
      <div className="flex flex-col gap-4">
        <CustomField
          required
          label="Name"
          type="text"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}

        <CustomField
          required
          label="Email"
          type="email"
          {...register("emailFrom", {
            required: true,
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
        />
        {errors.emailFrom && (
          <p className="text-red-500 text-sm">{errors.emailFrom.message}</p>
        )}

        <CustomField
          label="Phone Number"
          required
          type="text"
          {...register("phoneNumber", { required: true })}
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}

        <CustomField
          required
          label="City"
          type="text"
          {...register("residenceCity", { required: true })}
        />

        <Controller
          name="country"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SelectField
              required
              {...field}
              label="Country"
              options={countries}
            />
          )}
        />
        {errors.country && <p className="text-red-500 text-sm">Required</p>}

        <CustomField
          required
          label="Age"
          type="text"
          {...register("age", { required: true })}
        />

        <Controller
          name="positionType"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SelectField
              required
              {...field}
              label="Position Type"
              options={positionTypes}
            />
          )}
        />
        {errors.positionType && (
          <p className="text-red-500 text-sm">Required</p>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <Controller
          name="workPreference"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SelectField
              required
              {...field}
              label="Work Preference"
              options={workPreferences}
            />
          )}
        />
        {errors.workPreference && (
          <p className="text-red-500 text-sm">Required</p>
        )}

        <Controller
          name="desiredPosition"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SelectField
              required
              {...field}
              isMulti
              label="Desired Position"
              options={desiredPositions}
            />
          )}
        />

        <CustomField
          required
          label="LinkedIn Profile"
          type="text"
          {...register("linkedinProfile", {
            required: true,
            pattern: /^https:\/\/(www\.)?linkedin\.com\/.*$/i,
          })}
        />
        {errors.linkedinProfile && (
          <p className="text-red-500 text-sm">Enter valid LinkedIn URL</p>
        )}

        <CustomField
          required
          label="Resume"
          type="file"
          {...register("resume", { required: true })}
        />
        {errors.resume && (
          <p className="text-red-500 text-sm">Resume required</p>
        )}

        <CustomField
          label="Supporting Documents"
          type="file"
          {...register("supportingDocuments")}
          multiple
        />
        <CustomField
          label="Video Submission"
          type="file"
          {...register("videoSubmission")}
          multiple
        />
      </div>

      <div className="md:col-span-2">
        <CustomButton
          label={isLoading ? "Sending ..." : "Submit"}
          bgColor="bg-primary"
          textColor="text-white"
          hoverBg="bg-primary/70"
          type="submit"
          disabled={isLoading}
        />{" "}
      </div>
    </form>
  );
};

export default JoinTeam;
