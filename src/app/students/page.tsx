import { redirect } from "next/navigation";

/**
 * /students Route Redirect
 * Since the homepage (/) is the main students directory,
 * visiting /students will simply redirect the user to the homepage.
 */
export default function StudentsRedirect() {
  redirect("/");
}
