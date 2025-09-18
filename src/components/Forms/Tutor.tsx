"use client";
import React, { useEffect, useState } from "react";
import RadioGroup from "@/components/Custom/RadioGroup";
import CustomField from "@/components/Custom/CustomField";
import CustomButton from "@/components/Custom/CustomButton";
import { ENDPOINTS } from "@/app/api/api";
import Axios from "@/app/api/axios";
import {
  getCountries,
  getCurriculums,
  getGrades,
  getSubjects,
} from "@/services/get_all_select";
import SelectField from "@/components/Custom/SelectField";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { useSearchParams } from "next/navigation";

export interface Option {
  value: string;
  label: string;
}
export interface Country {
  id: number;
  name: string;
}
export interface Options {
  id: number;
  x_name: string;
}

interface FormValues {
  name: string;
  email: string;
  phone: string;
  nationality: string;
  city: string;
  firstLanguage: string;
  otherLanguage: string;
  cv: FileList;
  country: Option | null;
  tutoringType: Option | null;
  subjects: Option[];
  grades: Option[];
  curriculums: Option[];
  gender: string;
  emirateLicense: string;
  privateCar: string;
  committedOtherJob: string;
}
const TutorForm: React.FC = () => {
  const searchParams = useSearchParams();
  const { t } = useTranslation();

  // ✅ نخزن ref في state ليتحدث تلقائياً عند أي تغيير على الرابط
  const [refParam, setRefParam] = useState<string | null>(
    searchParams.get("ref")
  );

  useEffect(() => {
    setRefParam(searchParams.get("ref"));
  }, [searchParams]);

  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState<Option[]>([]);
  const [subjects, setSubjects] = useState<Option[]>([]);
  const [grades, setGrades] = useState<Option[]>([]);
  const [curriculums, setCurriculums] = useState<Option[]>([]);

  const tutoringTypes = [
    { value: "Home Tutoring Only", label: "Home Tutoring Only" },
    { value: "Home & Online Tutoring", label: "Home & Online Tutoring" },
    { value: "Online Only", label: "Online Only" },
  ];

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      country: null,
      tutoringType: null,
      subjects: [],
      grades: [],
      curriculums: [],
    },
  });

  useEffect(() => {
    getCountries()
      .then((data: Country[]) =>
        setCountries(
          data.map((c) => ({ value: c.id.toString(), label: c.name }))
        )
      )
      .catch(console.error);

    getSubjects()
      .then((data: Options[]) =>
        setSubjects(
          data.map((s) => ({ value: s.id.toString(), label: s.x_name }))
        )
      )
      .catch(console.error);

    getGrades()
      .then((data: Options[]) =>
        setGrades(
          data.map((g) => ({ value: g.id.toString(), label: g.x_name }))
        )
      )
      .catch(console.error);

    getCurriculums()
      .then((data: Options[]) =>
        setCurriculums(
          data.map((c) => ({ value: c.id.toString(), label: c.x_name }))
        )
      )
      .catch(console.error);
  }, []);

  const onSubmit = async (data: FormValues) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("emailFrom", data.email);
      formData.append("phoneNumber", data.phone);
      formData.append("nationality", data.nationality);
      formData.append("cityResidence", data.city);
      formData.append("firstLanguage", data.firstLanguage);
      formData.append("otherLanguage", data.otherLanguage);

      if (data.country) formData.append("countryId", data.country.value);
      if (data.tutoringType)
        formData.append("tutoringType", data.tutoringType.value);

      data.subjects.forEach((s) => formData.append("subjectIds[]", s.value));
      data.grades.forEach((g) => formData.append("gradeIds[]", g.value));
      data.curriculums.forEach((c) =>
        formData.append("curriculumIds[]", c.value)
      );

      formData.append("gender", data.gender);
      formData.append("drivingLicense", data.emirateLicense);
      formData.append("privateCar", data.privateCar);
      formData.append("committedToJob", data.committedOtherJob);

      if (data.cv?.[0]) formData.append("cv", data.cv[0]);

      const response = await Axios.post(ENDPOINTS.tutor, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        params: {
          ...(refParam ? { ref: refParam } : {}), // ✅ يرسل ref فقط لو موجود
        },
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
        if (errors && errors.length > 0) {
          const allErrors = errors.map((e) => e.msg).join("\n");
          console.error("❌ Validation Errors:\n" + allErrors);
          toast.error(allErrors);
        } else if (message) {
          console.error("❌ Error:", message);
          toast.error(message);
        } else {
          console.error("❌ Unexpected error", error);
          toast.error("Unexpected error occurred");
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
          icon={<></>}
          placeholder="Enter your name"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}

        <CustomField
          required
          label="Your Email"
          type="email"
          icon={<></>}
          placeholder="Enter your email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // regex للتحقق من الايميل
              message: "Please enter a valid email address",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}

        <CustomField
          required
          label="Phone Number"
          type="text"
          icon={<></>}
          placeholder="+31"
          {...register("phone", { required: true })}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}

        <CustomField
          required
          label="Nationality"
          type="text"
          icon={<></>}
          placeholder="Enter nationality"
          {...register("nationality", { required: true })}
        />
        {errors.nationality && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}

        <Controller
          name="country"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SelectField
              required
              label="Country"
              name={field.name} // ✅ هنا
              placeholder="Select country"
              options={countries}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        {errors.country && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}

        <CustomField
          required
          label="Where do you live (City)"
          type="text"
          icon={<></>}
          placeholder="Enter city"
          {...register("city", { required: true })}
        />
        {errors.city && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}

        <CustomField
          required
          label="First Language"
          type="text"
          icon={<></>}
          placeholder="Enter first language"
          {...register("firstLanguage", { required: true })}
        />
        {errors.firstLanguage && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}

        <CustomField
          label="Other Language"
          type="text"
          icon={<></>}
          placeholder="Enter other languages"
          {...register("otherLanguage")}
        />
        {errors.otherLanguage && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}

        <CustomField
          required
          label="CV"
          type="file"
          icon={<></>}
          placeholder="Upload your CV"
          {...register("cv", { required: true })}
        />
        {errors.cv && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}
      </div>

      {/* العمود الثاني */}
      <div className="flex flex-col gap-4">
        <Controller
          name="gender"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <RadioGroup
              required
              label="Gender"
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              options={[
                { value: "Male", label: "Male" },
                { value: "Female", label: "Female" },
              ]}
            />
          )}
        />
        {errors.gender && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}

        <Controller
          name="tutoringType"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SelectField
              required
              label="Tutoring Type"
              placeholder="Select tutoring type"
              name={field.name}
              options={tutoringTypes}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        {errors.tutoringType && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}

        <Controller
          name="subjects"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SelectField
              required
              label="Subjects"
              placeholder="Select subjects"
              name={field.name}
              options={subjects}
              isMulti
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        {errors.subjects && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}

        <Controller
          name="grades"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SelectField
              required
              label="Grades"
              placeholder="Select grades"
              name={field.name}
              options={grades}
              isMulti
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        {errors.grades && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}

        <Controller
          name="curriculums"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SelectField
              required
              label="Curriculums"
              placeholder="Select curriculums"
              name={field.name}
              options={curriculums}
              isMulti
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        {errors.curriculums && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}

        <Controller
          name="emirateLicense"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <RadioGroup
              label="Emirate driving license"
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              required
              options={[
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
              ]}
            />
          )}
        />
        {errors.emirateLicense && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}

        <Controller
          name="privateCar"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <RadioGroup
              label="Private Car"
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              required
              options={[
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
              ]}
            />
          )}
        />
        {errors.privateCar && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}

        <Controller
          name="committedOtherJob"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <RadioGroup
              label="Committed To Other Job"
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              required
              options={[
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
              ]}
            />
          )}
        />
        {errors.committedOtherJob && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}
      </div>

      {/* زر الإرسال */}
      <div className="md:col-span-2">
        <CustomButton
          label={isLoading ? "Sending ..." : "Submit"}
          bgColor="bg-primary"
          textColor="text-white"
          hoverBg="bg-primary/70"
          type="submit"
          disabled={isLoading}
        />
      </div>
    </form>
  );
};

export default TutorForm;
