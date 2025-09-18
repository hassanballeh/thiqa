"use client";
import React, { useEffect, useState } from "react";
import CustomField from "@/components/Custom/CustomField";
import CustomButton from "@/components/Custom/CustomButton";
import { ENDPOINTS } from "@/app/api/api";
import Axios from "@/app/api/axios";
import {
  getCurriculums,
  getGrades,
  getSubjects,
} from "@/services/get_all_select";
import SelectField from "@/components/Custom/SelectField";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { formatDate } from "./ReportMonthly";

export interface Option {
  value: string;
  label: string;
}
export interface Options {
  id: number;
  x_name: string;
}

export interface TutoringFormValues {
  parentName: string;
  partnerEmail: string;
  studentName: string;
  curriculums: Option[];
  subjects: Option[];
  teachingLanguage:
    | "arabic"
    | "english"
    | "french"
    | "chinese"
    | "english&arabic";
  grades: Option[];
  tutoring: "Online" | "Home" | "Any";
  tutorGender: "male" | "female" | "other";
  googleMapLink: string;
  schoolReturning: string;
  schoolName: string;
  aboutStudent: string;
  wantedHours: number;
  preferredStartDate: string;
  classDuration: number;
  classesPerWeek: number;
}

const NewReservation: React.FC = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [subjects, setSubjects] = useState<Option[]>([]);
  const [grades, setGrades] = useState<Option[]>([]);
  const [curriculums, setCurriculums] = useState<Option[]>([]);

  const teachingLanguages: Option[] = [
    { value: "arabic", label: "Arabic" },
    { value: "english", label: "English" },
    { value: "french", label: "French" },
    { value: "chinese", label: "Chinese" },
    { value: "english&arabic", label: "English & Arabic" },
  ];

  const tutoringTypes: Option[] = [
    { value: "Online", label: "Online" },
    { value: "Home", label: "Home" },
    { value: "Any", label: "Any" },
  ];

  const tutorGenders: Option[] = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<TutoringFormValues>({
    defaultValues: {
      parentName: "",
      partnerEmail: "",
      studentName: "",
      subjects: [],
      grades: [],
      curriculums: [],
      teachingLanguage: "arabic",
      tutoring: "Any",
      tutorGender: "male",
      googleMapLink: "",
      schoolReturning: "01:00",
      schoolName: "",
      aboutStudent: "",
      wantedHours: 0,
      preferredStartDate: "",
      classDuration: 0,
      classesPerWeek: 0,
    },
  });

  useEffect(() => {
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

  const onSubmit = async (data: TutoringFormValues) => {
    try {
      setIsLoading(true);

      // جهّز البودي حسب الـ API
      const payload = {
        parentName: data.parentName,
        partnerEmail: data.partnerEmail,
        studentName: data.studentName,
        subjectIds: data.subjects.map((s) => Number(s.value)),
        gradeIds: data.grades.map((g) => Number(g.value)),
        curriculumIds: data.curriculums.map((c) => Number(c.value)),
        teachingLanguage: data.teachingLanguage,
        tutoring: data.tutoring,
        tutorGender: data.tutorGender,
        googleMapLink: data.googleMapLink,
        schoolReturning: data.schoolReturning,
        schoolName: data.schoolName,
        aboutStudent: data.aboutStudent,
        wantedHours: data.wantedHours,
        preferredStartDate: formatDate(data.preferredStartDate),
        classDuration: data.classDuration,
        classesPerWeek: data.classesPerWeek,
      };

      // POST request بداتا raw
      const response = await Axios.post(
        `${ENDPOINTS.newReservation}`,
        payload, // الداتا raw JSON
        { headers: { "Content-Type": "application/json" } }
      );
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
          toast.error(allErrors);
        } else if (message) {
          toast.error(message);
        } else {
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
          label="Parent Name"
          type="text"
          {...register("parentName", { required: true })}
        />
        {errors.parentName && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}

        <CustomField
          required
          label="Partner Email"
          type="email"
          {...register("partnerEmail", { required: true })}
        />
        {errors.partnerEmail && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}

        <CustomField
          required
          label="Student Name"
          type="text"
          {...register("studentName", { required: true })}
        />
        {errors.studentName && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}

        {/* Multi selects */}
        <Controller
          name="subjects"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SelectField
              required
              name={field.name}
              label="Subjects"
              placeholder="Select subjects"
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
              name={field.name}
              label="Grades"
              placeholder="Select grades"
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
              name={field.name}
              label="Curriculums"
              placeholder="Select curriculums"
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

        {/* Single selects */}
        <Controller
          name="teachingLanguage"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SelectField
              required
              name={field.name}
              label="Teaching Language"
              placeholder="Select language"
              options={teachingLanguages}
              value={
                teachingLanguages.find((o) => o.value === field.value) || null
              }
              onChange={(opt) => field.onChange((opt as Option).value)}
            />
          )}
        />
        {errors.teachingLanguage && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}

        <Controller
          name="tutoring"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SelectField
              required
              name={field.name}
              label="Tutoring Type"
              placeholder="Select tutoring"
              options={tutoringTypes}
              value={tutoringTypes.find((o) => o.value === field.value) || null}
              onChange={(opt) => field.onChange((opt as Option).value)}
            />
          )}
        />
        {errors.tutoring && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}

        <Controller
          name="tutorGender"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SelectField
              required
              name={field.name}
              label="Tutor Gender"
              placeholder="Select gender"
              options={tutorGenders}
              value={tutorGenders.find((o) => o.value === field.value) || null}
              onChange={(opt) => field.onChange((opt as Option).value)}
            />
          )}
        />
        {errors.tutorGender && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}
      </div>
      <div className="flex flex-col gap-4">
        {/* باقي الحقول النصية / رقمية */}
        <CustomField
          required
          label="Google Map Link"
          type="text"
          {...register("googleMapLink", { required: true })}
        />
        <CustomField
          required
          label="School Returning (hours)"
          type="time"
          {...register("schoolReturning", { required: true })}
        />
        <CustomField
          required
          label="School Name"
          type="text"
          {...register("schoolName", { required: true })}
        />
        <CustomField
          required
          label="About Student"
          type="textarea"
          {...register("aboutStudent", { required: true })}
        />
        <CustomField
          required
          label="Wanted Hours"
          type="number"
          {...register("wantedHours", { required: true, valueAsNumber: true })}
        />
        <CustomField
          required
          label="Preferred Start Date"
          type="date"
          placeholder="MM-DD-YYYY"
          {...register("preferredStartDate", { required: true })}
        />
        <CustomField
          required
          label="Class Duration (hours)"
          type="number"
          {...register("classDuration", {
            required: true,
            valueAsNumber: true,
          })}
        />
        <CustomField
          required
          label="Classes Per Week"
          type="number"
          {...register("classesPerWeek", {
            required: true,
            valueAsNumber: true,
          })}
        />
      </div>
      <div className="md:col-span-2 mt-4">
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

export default NewReservation;
