import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-respository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create({type, comment, screenshot}: FeedbackCreateData){
        await prisma.feedbacks.create({
            data: {
                type, 
                comment, 
                screenshot
            }
        });
    }
}