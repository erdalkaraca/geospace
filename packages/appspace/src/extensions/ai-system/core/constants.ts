export const TOPIC_AI_STREAM_STARTED = "events/aiservice/streamStarted";
export const TOPIC_AI_STREAM_CHUNK = "events/aiservice/streamChunk";
export const TOPIC_AI_STREAM_COMPLETE = "events/aiservice/streamComplete";
export const TOPIC_AI_STREAM_ERROR = "events/aiservice/streamError";
export const TOPIC_AICONFIG_CHANGED = "events/aiservice/aiConfigChanged";
export const TOPIC_AGENT_WORKFLOW_STARTED = "events/aiservice/agentWorkflowStarted";
export const TOPIC_AGENT_WORKFLOW_COMPLETE = "events/aiservice/agentWorkflowComplete";
export const TOPIC_AGENT_WORKFLOW_ERROR = "events/aiservice/agentWorkflowError";

export const CID_AGENTS = "aiservice.agents";
export const CID_CHAT_PROVIDERS = "aiservice.chatProviders";
export const CID_PROMPT_ENHANCERS = "aiservice.promptEnhancers";

export const KEY_AI_CONFIG = "aiConfig";

export const AI_CONFIG_TEMPLATE = {
    "defaultProvider": "openai",
    "providers": []
};

export const MAX_TOOL_ITERATIONS = 10;
export const MAX_RECENT_TOOL_CALLS = 5;

