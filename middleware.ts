import { withAuth } from "next-auth/middleware"

// export { default } from "next-auth/middleware"

export default withAuth;
export const config = { 
    matcher: ["/bank/user"] 
} 