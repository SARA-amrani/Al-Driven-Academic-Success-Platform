import { Groq } from 'groq-sdk';

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true
});
const MODEL_NAME = 'llama3-8b-8192';

console.log(groq.apiKey)

export const generateMixtralResponse = async (prompt: string): Promise<string> => {
 console.log(`Sending prompt: ${prompt}`);

 if (!prompt || typeof prompt !== 'string' || prompt.trim() === '') {
 throw new Error('Invalid prompt');
 }

 try {
 const chatCompletion = await groq.chat.completions.create({
 messages: [{ role: 'user', content: prompt }],
 model: MODEL_NAME,
 });

 console.log(`Received response: ${JSON.stringify(chatCompletion)}`);

 if (chatCompletion.choices && chatCompletion.choices.length > 0) {
 return chatCompletion.choices[0].message.content;
 }

 throw new Error('No response from Groq API');
 } catch (error) {
 console.error(`Error generating response: ${error.message}`);
 return "Sorry, I encountered an error while processing your request.";
 }
};