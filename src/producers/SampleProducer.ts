import { queue } from "../Queues";

const simpleProducer = async (name: string, payload: Record<string, unknown>) => {
    await queue.add(name, payload)
}

export default simpleProducer