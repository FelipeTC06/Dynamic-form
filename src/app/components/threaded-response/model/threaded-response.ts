import { PersonalInfoResponse } from './personalInfo-response';
import { WorkInfoResponse } from "./workInfo-response";

export type ThreadedResponse = {
    personalInfo: PersonalInfoResponse,
    workInfo: WorkInfoResponse,
}
