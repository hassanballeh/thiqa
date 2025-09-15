"use client"
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import CustomButton from "../Custom/CustomButton";
import CustomField from "../Custom/CustomField";
import { Mail, MessageCircle, Phone, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import SelectField, { Option } from "../Custom/SelectField";
import { getGrades } from "@/services/get_all_select";
import { Options } from "../Forms/Tutor";
import { ENDPOINTS } from "@/app/api/api";
import Axios from "@/app/api/axios";
import toast from 'react-hot-toast'
import { AxiosError } from "axios";
import { BiBookmarkAltPlus } from "react-icons/bi";
import { IoBookOutline } from "react-icons/io5";
import { FaChalkboardUser } from "react-icons/fa6";

type BookFormValues = {
  studentName: string;
  contactNumber: string;
  email: string;
  grade: Option | null ; // رح نخزن label هون
  tutoring: "Online" | "Home";
  reservationType: string;
  moreInformation: string;
};

const BookForm: React.FC = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [grades, setGrades] = useState<Option[]>([]);
  useEffect(() => {
    getGrades()
      .then((data: Options[]) =>
        setGrades(
          data.map((g) => ({
            value: g.id.toString(), // value داخلي
            label: g.x_name, // رح نعرض ونبعت هاد
          }))
        )
      )
      .catch(console.error);
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<BookFormValues>({
    defaultValues: {
      studentName: "",
      contactNumber: "",
      email: "",
      grade: null,
      tutoring: "Online",
      reservationType: "",
      moreInformation: "",
    },
  });


const onSubmit = async (data: BookFormValues) => {
  try {
    setIsLoading(true);

    const payload = {
      ...data,
      grade: data.grade?.label, // 👈 نرسل الـ label فقط
    };

    console.log("📩 Data to send:", payload);

    const response = await Axios.post(ENDPOINTS.contact, payload, {
      headers: { "Content-Type": "application/json" },
    });

    toast.success(t("messsage.success")); // 🟢 رسالة نجاح
    console.log("✅ Success:", response.data);

    reset(); // 🟢 إعادة ضبط الفورم
  } catch (err: unknown) {
    const error = err as AxiosError<{ message?: string; errors?: { msg: string }[] }>;

    if (error.response?.data) {
      const { message, errors } = error.response.data;

      if (errors && errors.length > 0) {
        const allErrors = errors.map((e) => e.msg).join("\n"); // 🟢 يفصل بينهم بسطر جديد
        console.error("❌ Validation Errors:\n" + allErrors);
        toast.error(allErrors);
      } else if (message) {
        console.error("❌ Error:", message);
        toast.error(message);
      } else {
        console.error("❌ Unexpected error", error);
        toast.error("Unexpected error occurred");
      }
    } else {
      console.error("❌ Network/Unknown error:", error);
      toast.error("Network error, please try again.");
    }
  } finally {
    setIsLoading(false);
  }
};
  return (
    <div className='bg-white py-16 px-4'>
    <section className="container mx-auto ">
<div className=" flex-1 md:px-4 text-center md:text-start flex flex-col justify-center max-w-2xl">
<div className='text-3xl md:text-6xl'>
  <h2 className="font-bold text-primary leading-tight font-roboto">
  {t('shadow.30-heading')}

</h2>
</div>

  <p className="max-w-[430px] text-[15px] text-gray1 font-light mt-4">
  {t('academic.26-heading2')}
 </p>
</div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mt-10 p-4"
        >
          {/* العمود الأول */}
          <div className="flex flex-col gap-4">
            <CustomField
            
              label={t("form.name")}
              type="text"
              placeholder={t("form.name-pl")}
              required
              icon={<User size={16} />}
              {...register("studentName", { required: true })}
            />
            {errors.studentName && (
              <p className="text-red-500 text-sm">Required</p>
            )}

            {/* 👇 Select للـ Grades */}
<div>

<Controller
  name="grade"
  control={control}
  rules={{ required: true }}
  render={({ field }) => (
    <SelectField
      name={field.name}
      label="Grades"
      placeholder="Select grades"
      required
      options={grades}
      value={field.value}
      onChange={(val) => field.onChange(val)} // مهم
      
      icon={<IoBookOutline/>}
    />
  )}
/>

  {errors.grade && (
    <p className="text-red-500 text-sm">Required</p>
  )}
</div>


            <CustomField
            
              label={t("form.mobile")}
              type="text"
              required
              placeholder={t("form.mobile-pl")}
              icon={<Phone size={16} />}
              {...register("contactNumber", { required: true })}
            />
            {errors.contactNumber && (
              <p className="text-red-500 text-sm">Required</p>
            )}

            <CustomField
            
              label="Email"
              type="email"
              placeholder="example@email.com"
              required
              icon={<Mail size={16} />}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">Required</p>
            )}
          </div>

          {/* العمود الثاني */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 my-2.5">
  <label className="flex items-center text-sm font-medium text-gray1 gap-1">
    <FaChalkboardUser className="text-primary" />
    {t("form.shadow")}
    <span className="text-red-500">*</span> {/* نجمة حمراء */}
  </label>
  <div className="flex items-center gap-4">
    {/* <label className="flex items-center gap-1 text-sm">
      <input
        type="radio"
        value="Online"
        {...register("tutoring", { required: true })}
      />
      Online
    </label> */}
    <label className="flex items-center gap-1 text-sm">
      <input
        type="radio"
        value="Home"
        {...register("tutoring", { required: true })}
      />
      {t("form.home")}
    </label>
  </div>
  {errors.tutoring && (
    <p className="text-red-500 text-sm">Required</p>
  )}
</div>

            <CustomField
            
            icon={<BiBookmarkAltPlus/>}
              label={t("form.free-session")}
              type="text"
              placeholder={t("form.reason-pl-shadow")}
              required
              {...register("reservationType", { required: true })}
            />
            {errors.reservationType && (
              <p className="text-red-500 text-sm">Required</p>
            )}

            <CustomField
            
              label={t("form.more")}
              type="textarea"
              placeholder={t("form.more-pl")}
              required
              icon={<MessageCircle size={16} />}
              {...register("moreInformation", { required: true })}
            />
          </div>

          {/* زر الإرسال */}
          <div className="md:col-span-2">
            <CustomButton
              label={isLoading ? "Sending..." : t("tutoring.25-book")}
              bgColor="bg-primary"
              textColor="text-white"
              hoverBg="bg-primary/70"
              type="submit"
              disabled={isLoading}
            />
          </div>
        </form>
</section>

    </div> 
  )
}

export default BookForm