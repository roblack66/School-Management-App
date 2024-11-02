import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";

export const assignmentFile = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/school-app/*'
    }),
    preservePath: true
})