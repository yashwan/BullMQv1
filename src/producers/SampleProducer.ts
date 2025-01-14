import { queue } from "../Queues";

const simpleProducer = async (name: string, payload: Record<string, unknown>) => {
    console.log(`Producing job with name: ${name} and payload: ${JSON.stringify(payload)}`)
    await queue.add(name, payload)
}

export default simpleProducer