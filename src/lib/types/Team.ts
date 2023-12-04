import type { UUID } from 'crypto';
import type { Club } from './Club';

export type Team ={

    id: UUID,
    gender: String,
    age_group: String,
    number: Number,
    season: String,
    club:Club

}