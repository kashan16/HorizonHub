import Loader from "@/components/shared/Loader"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createUserAccount } from "@/lib/appwrite/api"
import { SignUpValidationSchema } from "@/lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { z } from "zod"

const SigninForm = () => {
  const isLoading = false;
  const form = useForm<z.infer<typeof SignUpValidationSchema>>({
    resolver: zodResolver(SignUpValidationSchema),
    defaultValues: {
      name : '',
      username: "",
      email : '',
      password : '',
    },
  })
  async function onSubmit(values: z.infer<typeof SignUpValidationSchema>) {
    const newUser = await createUserAccount(values);
    console.log(newUser);
  }

  return (
      <Form {...form}>
        <div className="sm:w-420 flex-center flex-col">
          {/* render the logo here */}{/* <img
          src = "/assets/LOGO1.png"
          alt = "Logo"
          /> */}
          <p className="text-light-3 small-medium md:base-regular mt-2">
            Please Enter your details
          </p>
        <form onSubmit={form.handleSubmit(onSubmit)} 
        className="flex flex-col gap-5 w-full mt-4">
          <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
        )}
      />
          <FormField
          control={form.control}
          name = "username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
        )}
      />
          <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
        )}
      />
          <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
        )}
      />
      <Button type="submit" className="shad-button_primary">
        {isLoading ? (<div className="flex-center gap-2">
          <Loader/>
        </div>) : (<div>
          Sign Up
        </div>)}
      </Button>
      <p className="text-small-regular text-light-2 text-center mt-2">
        Dont't Have an Account Sign-Up? 
        <Link to="/sign-up" className="text-primary-500 text-small-semibold ml-1">Sign-Up</Link>
      </p>
      </form>
      </div>
    </Form>
  )
}

export default SigninForm