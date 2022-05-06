import { SubmitFeedFeedbackCase } from "./submit-feedback-use-cases"

describe('Submit feedback', () => {
    it('should de able to submit a feedback',async() => {
        const submitFeedback = new SubmitFeedFeedbackCase(
            { create: async () => { } },
            { sendMail: async () => { } }
        )
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Exemplo de feedback',
            screenshot: 'teste.jpg'
        })).resolves.not.toThrow();
    });
})