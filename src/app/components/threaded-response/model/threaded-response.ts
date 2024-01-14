import { PersonalInfoResponse } from './personalInfo-response';
import { WorkInfoResponse } from "./workInfo-response";

export type ThreadedResponse = {
    id: number,
    personalInfo: PersonalInfoResponse,
    workInfo: WorkInfoResponse,
}
