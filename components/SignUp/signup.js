import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./signup.module.scss";
import { useFormik } from "formik";
import { SignUpSchema } from "./SignUpSchema";
import { toast } from "react-toastify";
const Signup = () => {
  const SignUpFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: async (values, onSubmitProps) => {
      console.log(values, "Values____");
      toast.success("You Signed Up Successfuly");
      onSubmitProps.resetForm();
    },
  });
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.signup}>
            <div className={styles.left}>
              <div className={styles.heading}>SignUp Now !</div>
              <form
                className={styles.formsection}
                onSubmit={SignUpFormik.handleSubmit}
              >
                <div className={styles.inputdiv}>
                  <input
                    type="text"
                    placeholder="Name *"
                    {...SignUpFormik.getFieldProps("name")}
                  />
                  {SignUpFormik.touched.name && SignUpFormik.errors.name ? (
                    <div className={styles.error}>
                      {SignUpFormik.errors.name}
                    </div>
                  ) : null}
                </div>
                <div className={styles.inputdiv}>
                  <input
                    type="email"
                    placeholder="Email *"
                    {...SignUpFormik.getFieldProps("email")}
                  />
                  {SignUpFormik.touched.email && SignUpFormik.errors.email ? (
                    <div className={styles.error}>
                      {SignUpFormik.errors.email}
                    </div>
                  ) : null}
                </div>
                <div className={styles.inputdiv}>
                  <input
                    type="password"
                    placeholder="Password *"
                    {...SignUpFormik.getFieldProps("password")}
                  />
                  {SignUpFormik.touched.password &&
                  SignUpFormik.errors.password ? (
                    <div className={styles.error}>
                      {SignUpFormik.errors.password}
                    </div>
                  ) : null}
                </div>
                <div className={styles.inputdiv}>
                  <input
                    type="password"
                    placeholder="Confirm Password *"
                    {...SignUpFormik.getFieldProps("confirmpassword")}
                  />
                  {SignUpFormik.touched.confirmpassword &&
                  SignUpFormik.errors.confirmpassword ? (
                    <div className={styles.error}>
                      {SignUpFormik.errors.confirmpassword}
                    </div>
                  ) : null}
                </div>
                <div className={styles.signupbtn}>
                  <button type="submit">Sign Up</button>
                </div>
              </form>

              <div className={styles.login}>
                Already have an Account ? &nbsp;
                <Link href="/">Login</Link>
              </div>
              <div className={styles.socialicon}>
                <div className={styles.google}>
                  <Image src="/google.svg" width={25} height={20} alt="" />
                  <span>Google Account</span>
                </div>
                <div className={styles.google}>
                  <Image src="/facebook.svg" width={25} height={20} alt="" />
                  <span>Facebook Account</span>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.bgimage}>
                <Image
                  src="/Rectangle.svg"
                  width={330}
                  height={490}
                  alt="Pic"
                />
              </div>
              <div className={styles.profileman}>
                <Image
                  src="/profile-man.svg"
                  width={200}
                  height={200}
                  alt="Pic"
                />
              </div>
              <div className={styles.lampshade}>
                <Image src="/lampshade.svg" width={90} height={100} alt="Pic" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
