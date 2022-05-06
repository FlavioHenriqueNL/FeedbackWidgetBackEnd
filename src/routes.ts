import express from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedback-repository';
import { SubmitFeedFeedbackCase } from './use-cases/submit-feedback-use-cases';

export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {

	const { type, comment, screenshot } = req.body;
	const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
	const nodemailerMailAdapter = new NodemailerMailAdapter();
	const submitFeedFeedbackCase = new SubmitFeedFeedbackCase(prismaFeedbacksRepository, nodemailerMailAdapter);

	await submitFeedFeedbackCase.execute({
		type,
		comment,
		screenshot
	})

	return res.status(201).send()
})
