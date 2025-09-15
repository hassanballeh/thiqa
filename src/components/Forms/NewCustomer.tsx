"use client"
import React, { useEffect, useState } from 'react'
import CustomField from '@/components/Custom/CustomField'
import CustomButton from '@/components/Custom/CustomButton'
import {  ENDPOINTS } from '@/app/api/api';
import Axios from '@/app/api/axios'
import {  getCurriculums, getGrades, getSubjects } from '@/services/get_all_select'
import SelectField from '@/components/Custom/SelectField'
import toast from 'react-hot-toast'
import { AxiosError } from 'axios'
import { useTranslation } from 'react-i18next'
import { useForm, Controller } from "react-hook-form";
import { Option, Options } from './Tutor'
import { formatDate } from './ReportMonthly'

interface FormValues {
  name: string;                       // "Ahmad Alkaddah"
  phone: string;                      // "+96332302738"
  email: string;                      // "ahmad@example.com"
  state: string;                      // "Dubai"
  area: string;                       // "Jumeirah"
  house: string;                      // "Villa 12"
  idNumber: string;                   // "784-1990-1234567-1"
  studentName: string;                // "Ahmad Alkaddah"

  curriculumIds: Option[];            // [3]
  subjectIds: Option[];               // [4]
  gradeIds: Option[];                 // [3]

  teachingLanguage: "arabic" | "english" | "french" | "chinese" | "english&arabic";
  tutoring: "Online" | "Home" | "Any";
  tutorGender: "male" | "female" | "other";

  schoolName: string;                 // "Brighton College Dubai"
  aboutStudent?: string;              // "Michael is very curious..."
  wantedHours?: number;               // float (مثلاً: 6)
  preferredStartDate?: string;        // "12-01-2024" (MM-DD-YYYY)
  classDuration?: number;             // float (مثلاً: 2)
  classesPerWeek?: number;            // integer (مثلاً: 3)

  idFile: FileList;                   // PDF مرفق
  googleMapLink?: string;             // "https://maps.app.goo.gl/example"
  schoolReturning?: number;           // float (مثلاً: 15.5)
}


const NewCustomer: React.FC = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [subjects, setSubjects] = useState<Option[]>([]);
  const [grades, setGrades] = useState<Option[]>([]);
  const [curriculums, setCurriculums] = useState<Option[]>([]);

  const tutoringTypes = [
    { value: "Online", label: "Online" },
    { value: "Home", label: "Home" },
    { value: "Any", label: "Any" },
  ];

  const teachingLanguages = [
    { value: "arabic", label: "Arabic" },
    { value: "english", label: "English" },
    { value: "french", label: "French" },
    { value: "chinese", label: "Chinese" },
    { value: "english&arabic", label: "English & Arabic" },
  ];

  const tutorGenders = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const { register, handleSubmit, control, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      curriculumIds: [],
      subjectIds: [],
      gradeIds: [],
    },
  });

  useEffect(() => {
    getSubjects()
      .then((data: Options[]) =>
        setSubjects(data.map(s => ({ value: s.id.toString(), label: s.x_name })))
      )
      .catch(console.error);

    getGrades()
      .then((data: Options[]) =>
        setGrades(data.map(g => ({ value: g.id.toString(), label: g.x_name })))
      )
      .catch(console.error);

    getCurriculums()
      .then((data: Options[]) =>
        setCurriculums(data.map(c => ({ value: c.id.toString(), label: c.x_name })))
      )
      .catch(console.error);
  }, []);

const onSubmit = async (data: FormValues) => {
  try {
    setIsLoading(true);
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("state", data.state);
    formData.append("area", data.area);
    formData.append("house", data.house);
    formData.append("idNumber", data.idNumber);
    formData.append("studentName", data.studentName);

    // ✅ تحويل arrays من {value,label} إلى القيم فقط
    (data.curriculumIds as Option[]).forEach(c =>
      formData.append("curriculumIds[]", c.value.toString())
    );
    (data.subjectIds as Option[]).forEach(s =>
      formData.append("subjectIds[]", s.value.toString())
    );
    (data.gradeIds as Option[]).forEach(g =>
      formData.append("gradeIds[]", g.value.toString())
    );

    // ✅ أخذ قيمة value فقط من الكائنات
// ✅ الحل مع TypeScript
formData.append(
  "teachingLanguage",
  typeof data.teachingLanguage === "object"
    ? (data.teachingLanguage as Option).value
    : data.teachingLanguage
);

formData.append(
  "tutoring",
  typeof data.tutoring === "object"
    ? (data.tutoring as Option).value
    : data.tutoring
);

formData.append(
  "tutorGender",
  typeof data.tutorGender === "object"
    ? (data.tutorGender as Option).value
    : data.tutorGender
);

    formData.append("schoolName", data.schoolName);
    if (data.aboutStudent) formData.append("aboutStudent", data.aboutStudent);
    if (data.wantedHours) formData.append("wantedHours", data.wantedHours.toString());
    if (data.preferredStartDate) formData.append("preferredStartDate", formatDate(data.preferredStartDate));
    if (data.classDuration) formData.append("classDuration", data.classDuration.toString());
    if (data.classesPerWeek) formData.append("classesPerWeek", data.classesPerWeek.toString());

    if (data.idFile?.[0]) formData.append("idFile", data.idFile[0]);
    if (data.googleMapLink) formData.append("googleMapLink", data.googleMapLink);
    if (data.schoolReturning) formData.append("schoolReturning", data.schoolReturning.toString());

    const response = await Axios.post(`${ENDPOINTS.newCustomer}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    toast.success(t("messsage.success"));
    console.log("✅ Success:", response.data);
  } catch (err: unknown) {
    const error = err as AxiosError<{ message?: string; errors?: { msg: string }[] }>;
    if (error.response?.data) {
      const { message, errors } = error.response.data;
      if (errors?.length) {
        const allErrors = errors.map((e) => e.msg).join("\n");
        toast.error(allErrors);
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
        <CustomField required label="Name" type="text" placeholder="Enter your name" {...register("name", { required: true })} />
        {errors.name && <p className="text-red-500 text-sm">This field is required</p>}

        <CustomField required label="Email" type="email" placeholder="Enter your email" {...register("email", { required: true })} />
        {errors.email && <p className="text-red-500 text-sm">This field is required</p>}

        <CustomField required label="Phone" type="text" placeholder="+971..." {...register("phone", { required: true })} />
        {errors.phone && <p className="text-red-500 text-sm">This field is required</p>}

        <CustomField required label="State" type="text" placeholder="Dubai" {...register("state", { required: true })} />
        {errors.state && <p className="text-red-500 text-sm">This field is required</p>}

        <CustomField required label="Area" type="text" placeholder="Jumeirah" {...register("area", { required: true })} />
        {errors.area && <p className="text-red-500 text-sm">This field is required</p>}

        <CustomField  label="House" type="text" placeholder="Villa 12" {...register("house", { required: true })} />
        {errors.house && <p className="text-red-500 text-sm">This field is required</p>}

        <CustomField required label="ID Number" type="text" placeholder="784-XXXX-XXXXXXX-X" {...register("idNumber", { required: true })} />
        {errors.idNumber && <p className="text-red-500 text-sm">This field is required</p>}

        <CustomField required label="Student Name" type="text" placeholder="Student full name" {...register("studentName", { required: true })} />
        {errors.studentName && <p className="text-red-500 text-sm">This field is required</p>}
<Controller
  name="tutoring"
  control={control}
  rules={{ required: true }}
  render={({ field }) => (
    <SelectField
      name={field.name}
      required
      label="Tutoring Type"
      placeholder="Select tutoring type"
      options={tutoringTypes}
      value={tutoringTypes.find(o => o.value === field.value) || null}
      onChange={(option) => field.onChange((option as Option).value)}
    />
  )}
/>
{errors.tutoring && <p className="text-red-500 text-sm">This field is required</p>}

<Controller
  name="teachingLanguage"
  control={control}
  rules={{ required: true }}
  render={({ field }) => (
    <SelectField
      name={field.name}
      required
      label="Teaching Language"
      placeholder="Select language"
      options={teachingLanguages}
      value={teachingLanguages.find(o => o.value === field.value) || null}
      onChange={(option) => field.onChange((option as Option).value)}
    />
  )}
/>
{errors.teachingLanguage && <p className="text-red-500 text-sm">This field is required</p>}

<Controller
  name="tutorGender"
  control={control}
  rules={{ required: true }}
  render={({ field }) => (
    <SelectField
      name={field.name}
      required
      label="Tutor Gender"
      placeholder="Select gender"
      options={tutorGenders}
      value={tutorGenders.find(o => o.value === field.value) || null}
      onChange={(option) => field.onChange((option as Option).value)}
    />
  )}
/>
{errors.tutorGender && <p className="text-red-500 text-sm">This field is required</p>}

        <Controller
          name="curriculumIds"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SelectField required name={field.name}  label="Curriculums" options={curriculums} isMulti value={field.value} onChange={field.onChange} />
          )}
        />
        {errors.curriculumIds && <p className="text-red-500 text-sm">This field is required</p>}
      </div>

      {/* العمود الثاني */}
      <div className="flex flex-col gap-4">
        <Controller
          name="subjectIds"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SelectField required name={field.name}  label="Subjects" options={subjects} isMulti value={field.value} onChange={field.onChange} />
          )}
        />
        {errors.subjectIds && <p className="text-red-500 text-sm">This field is required</p>}

        <Controller
          name="gradeIds"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SelectField name={field.name}  label="Grades" options={grades} isMulti value={field.value} onChange={field.onChange} />
          )}
        />
        {errors.gradeIds && <p className="text-red-500 text-sm">This field is required</p>}

        <CustomField required label="School Name" type="text" placeholder="Brighton College Dubai" {...register("schoolName", { required: true })} />
        {errors.schoolName && <p className="text-red-500 text-sm">This field is required</p>}

        <CustomField required label="About Student" type="text" placeholder="Write something..." {...register("aboutStudent")} />
        <CustomField required label="Wanted Hours" type="number" placeholder="6" {...register("wantedHours")} />
        <CustomField required label="Preferred Start Date" type="date" placeholder="MM-DD-YYYY" {...register("preferredStartDate")} />
        <CustomField required label="Class Duration (hours)" type="number" placeholder="2" {...register("classDuration")} />
        <CustomField required label="Classes Per Week" type="number" placeholder="3" {...register("classesPerWeek")} />

        <CustomField required label="Upload ID File" type="file" {...register("idFile", { required: true })} />
        {errors.idFile && <p className="text-red-500 text-sm">This field is required</p>}

<CustomField
  label="Google Map Link"
  type="text"
  placeholder="https://maps..."
  {...register("googleMapLink", {
    pattern: {
      value: /^(https?:\/\/)?(www\.)?(maps\.app\.goo\.gl|goo\.gl\/maps|google\.com\/maps)\/.+$/i,
      message: "Please enter a valid Google Maps link",
    },
  })}
/>
{errors.googleMapLink && (
  <p className="text-red-500 text-sm">{errors.googleMapLink.message}</p>
)}
        <CustomField required label="School Returning" type="time" placeholder="02:00" {...register("schoolReturning")} />
      </div>

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

export default NewCustomer