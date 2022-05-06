import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-respository";

interface SubmitFeedFeedbackCaseData {
	type: string,
	comment: string,
	screenshot?: string,
}

export class SubmitFeedFeedbackCase {

	constructor(
		private feedbackRepository: FeedbacksRepository,
		private mailAdapter: MailAdapter
	) { }

	async execute(request: SubmitFeedFeedbackCaseData): Promise<void> {
		const { type, comment, screenshot } = request;
		await this.feedbackRepository.create({
			type,
			comment,
			screenshot
		})

		await this.mailAdapter.sendMail({
			subject: 'Novo Feedback',
			body: [
				`<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
				`<p>Tipo de feedback ${type}</p>`,
				`<p>Comentário: ${comment}</p>`,
				`</div>`,
			].join('\n')
		})
	}
}