"use client";
import React, { useEffect, useState } from "react";
import CustomField from "@/components/Custom/CustomField";
import CustomButton from "@/components/Custom/CustomButton";
import { ENDPOINTS } from "@/app/api/api";
import Axios from "@/app/api/axios";
import {
  getCurriculums,
  getFollowingTypes,
  getGrades,
  getSubjects,
} from "@/services/get_all_select";
import SelectField, { Option } from "@/components/Custom/SelectField";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { Options } from "./Tutor";
import { MultiValue, SingleValue } from "react-select";

interface FormValues {
  description: string; // Trial Progress Report - July 2025
  reservationId: string; // "7540"
  studentName: string; // "محمد سعود"

  gradeId: string; // "3"
  curriculumId: string; // "8"

  subject1Id?: string; // "4"
  type1Ids?: number[]; // [1,2,3]

  subject2Id?: string; // "4"
  type2Ids?: number[]; // [1,2,3]

  subject3Id?: string; // "15"
  type3Ids?: number[]; // [1,2,3]

  subject4Id?: string; // "15"
  type4Ids?: number[]; // [1,2,3]

  additionalSubjects?: string; // "Science, History"
  goals?: string; // "Mastered long division..."
  plan?: string; // "Next month's focus..."
  notes?: FileList; // مرفق PDF
}

const ReportTrail: React.FC = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [subjects, setSubjects] = useState<Option[]>([]);
  const [grades, setGrades] = useState<Option[]>([]);
  const [curriculums, setCurriculums] = useState<Option[]>([]);
  const [followingTypes, setFollowingTypes] = useState<Option[]>([]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      type1Ids: [],
      type2Ids: [],
      type3Ids: [],
      type4Ids: [],
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

    getFollowingTypes()
      .then((data: Options[]) =>
        setFollowingTypes(
          data.map((f) => ({ value: f.id.toString(), label: f.x_name }))
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
      formData.append("description", data.description);
      formData.append("reservationId", data.reservationId);
      formData.append("studentName", data.studentName);

      formData.append("gradeId", data.gradeId);
      formData.append("curriculumId", data.curriculumId);

      if (data.subject1Id) formData.append("subject1Id", data.subject1Id);
      data.type1Ids?.forEach((id) =>
        formData.append("type1Ids[]", id.toString())
      );

      if (data.subject2Id) formData.append("subject2Id", data.subject2Id);
      data.type2Ids?.forEach((id) =>
        formData.append("type2Ids[]", id.toString())
      );

      if (data.subject3Id) formData.append("subject3Id", data.subject3Id);
      data.type3Ids?.forEach((id) =>
        formData.append("type3Ids[]", id.toString())
      );

      if (data.subject4Id) formData.append("subject4Id", data.subject4Id);
      data.type4Ids?.forEach((id) =>
        formData.append("type4Ids[]", id.toString())
      );

      if (data.additionalSubjects)
        formData.append("additionalSubjects", data.additionalSubjects);
      if (data.goals) formData.append("goals", data.goals);
      if (data.plan) formData.append("plan", data.plan);

      if (data.notes?.[0]) formData.append("notes", data.notes[0]);

      const response = await Axios.post(`${ENDPOINTS.reportTrail}`, formData, {
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

        if (errors && errors.length > 0) {
          const allErrors = errors.map((e) => e.msg).join("\n"); // 🟢 يفصل بينهم بسطر جديد
          console.error("❌ Validation Errors:\n" + allErrors);
          toast.error(allErrors); // لو بدك تعرضهم في Toast
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
      {/* العمود الأول */}
      <div className="flex flex-col gap-4">
        <CustomField
          label="Description *"
          type="text"
          {...register("description", { required: true })}
        />
        {errors.description && <p className="text-red-500 text-sm">Required</p>}

        <CustomField
          label="Reservation Id *"
          type="text"
          {...register("reservationId", { required: true })}
        />
        {errors.reservationId && (
          <p className="text-red-500 text-sm">Required</p>
        )}

        <CustomField
          label="Student Name *"
          type="text"
          {...register("studentName", { required: true })}
        />
        {errors.studentName && <p className="text-red-500 text-sm">Required</p>}

        {/* Grade */}
        <Controller
          name="gradeId"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SelectField
              name={field.name} // ✅ تمرير الاسم
              label="Grade "
              placeholder="Select grade"
              options={grades}
              value={grades.find((g) => g.value === field.value) || null}
              onChange={(option) =>
                field.onChange((option as SingleValue<Option>)?.value || "")
              }
              required
            />
          )}
        />
        {errors.gradeId && <p className="text-red-500 text-sm">Required</p>}

        {/* Curriculum */}
        <Controller
          name="curriculumId"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SelectField
              name={field.name}
              label="Curriculum *"
              placeholder="Select curriculum"
              options={curriculums}
              value={curriculums.find((c) => c.value === field.value) || null}
              onChange={(option) =>
                field.onChange((option as SingleValue<Option>)?.value || "")
              }
            />
          )}
        />
        {errors.curriculumId && (
          <p className="text-red-500 text-sm">Required</p>
        )}
        {/* Subject 1 */}
        <Controller
          name="subject1Id"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SelectField
              name={field.name}
              label="Subject 1 *"
              placeholder="Select subject"
              options={subjects}
              value={subjects.find((s) => s.value === field.value) || null}
              onChange={(option) =>
                field.onChange((option as SingleValue<Option>)?.value || "")
              }
            />
          )}
        />
        {errors.subject1Id && <p className="text-red-500 text-sm">Required</p>}

        {/* Type 1 (multi select) */}
        <Controller
          name="type1Ids"
          rules={{ required: true }}
          control={control}
          render={({ field }) => (
            <SelectField
              name={field.name}
              required
              label="Following Type 1 "
              placeholder="Select following types"
              options={followingTypes}
              isMulti
              value={followingTypes.filter((ft) =>
                field.value?.includes(Number(ft.value))
              )}
              onChange={(options) => {
                const selected = (options as MultiValue<Option>).map((o) =>
                  Number(o.value)
                );
                field.onChange(selected);
              }}
            />
          )}
        />
        {errors.type1Ids && <p className="text-red-500 text-sm">Required</p>}

        {/* Subject 2 */}
        <Controller
          name="subject2Id"
          control={control}
          render={({ field }) => (
            <SelectField
              name={field.name}
              label="Subject 2"
              placeholder="Select subject"
              options={subjects}
              value={subjects.find((s) => s.value === field.value) || null}
              onChange={(option) =>
                field.onChange((option as SingleValue<Option>)?.value || "")
              }
            />
          )}
        />

        {/* Type 2 (multi select) */}
        <Controller
          name="type2Ids"
          control={control}
          render={({ field }) => (
            <SelectField
              name={field.name}
              label="Following Type 2"
              placeholder="Select following types"
              options={followingTypes}
              isMulti
              value={followingTypes.filter((ft) =>
                field.value?.includes(Number(ft.value))
              )}
              onChange={(options) => {
                const selected = (options as MultiValue<Option>).map((o) =>
                  Number(o.value)
                );
                field.onChange(selected);
              }}
            />
          )}
        />
      </div>

      {/* العمود الثاني */}
      <div className="flex flex-col gap-4">
        {/* Subject 3 */}
        <Controller
          name="subject3Id"
          control={control}
          render={({ field }) => (
            <SelectField
              name={field.name}
              label="Subject 3"
              placeholder="Select subject"
              options={subjects}
              value={subjects.find((s) => s.value === field.value) || null}
              onChange={(option) =>
                field.onChange((option as SingleValue<Option>)?.value || "")
              }
            />
          )}
        />

        {/* Type 3 (multi select) */}
        <Controller
          name="type3Ids"
          control={control}
          render={({ field }) => (
            <SelectField
              name={field.name}
              label="Following Type 3"
              placeholder="Select following types"
              options={followingTypes}
              isMulti
              value={followingTypes.filter((ft) =>
                field.value?.includes(Number(ft.value))
              )}
              onChange={(options) => {
                const selected = (options as MultiValue<Option>).map((o) =>
                  Number(o.value)
                );
                field.onChange(selected);
              }}
            />
          )}
        />

        {/* Subject 4 */}
        <Controller
          name="subject4Id"
          control={control}
          render={({ field }) => (
            <SelectField
              name={field.name}
              label="Subject 4"
              placeholder="Select subject"
              options={subjects}
              value={subjects.find((s) => s.value === field.value) || null}
              onChange={(option) =>
                field.onChange((option as SingleValue<Option>)?.value || "")
              }
            />
          )}
        />

        {/* Type 4 (multi select) */}
        <Controller
          name="type4Ids"
          control={control}
          render={({ field }) => (
            <SelectField
              name={field.name}
              label="Following Type 4"
              placeholder="Select following types"
              options={followingTypes}
              isMulti
              value={followingTypes.filter((ft) =>
                field.value?.includes(Number(ft.value))
              )}
              onChange={(options) => {
                const selected = (options as MultiValue<Option>).map((o) =>
                  Number(o.value)
                );
                field.onChange(selected);
              }}
            />
          )}
        />

        {/* Additional subjects */}
        <CustomField
          label="Additional Subjects"
          type="textarea"
          {...register("additionalSubjects")}
        />

        {/* Goals */}
        <CustomField
          label="Reservation Goals *"
          type="textarea"
          {...register("goals", { required: true })}
        />
        {errors.goals && <p className="text-red-500 text-sm">Required</p>}

        {/* Plan */}
        <CustomField
          label="Study Plan *"
          type="textarea"
          {...register("plan", { required: true })}
        />
        {errors.plan && <p className="text-red-500 text-sm">Required</p>}

        {/* Notes */}
        <CustomField
          label="Additional Notes *"
          type="file"
          {...register("notes", { required: true })}
        />
        {errors.notes && <p className="text-red-500 text-sm">Required</p>}
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

export default ReportTrail;
