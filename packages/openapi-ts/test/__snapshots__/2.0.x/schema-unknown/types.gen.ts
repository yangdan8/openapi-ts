// This file is auto-generated by @hey-api/openapi-ts

export type SendEmailRequest = {
    /**
     * The sender email address. Must have a registered and confirmed Sender Signature.
     */
    From?: string;
    /**
     * Recipient email address. Multiple addresses are comma seperated. Max 50.
     */
    To?: string;
    /**
     * Recipient email address. Multiple addresses are comma seperated. Max 50.
     */
    Cc?: string;
    /**
     * Bcc recipient email address. Multiple addresses are comma seperated. Max 50.
     */
    Bcc?: string;
    /**
     * Email Subject
     */
    Subject?: string;
    /**
     * Email tag that allows you to categorize outgoing emails and get detailed statistics.
     */
    Tag?: string;
    /**
     * If no TextBody specified HTML email message
     */
    HtmlBody?: string;
    /**
     * If no HtmlBody specified Plain text email message
     */
    TextBody?: string;
    /**
     * Reply To override email address. Defaults to the Reply To set in the sender signature.
     */
    ReplyTo?: string;
    /**
     * Activate open tracking for this email.
     */
    TrackOpens?: boolean;
    /**
     * Replace links in content to enable "click tracking" stats. Default is 'null', which uses the server's LinkTracking setting'.
     */
    TrackLinks?: 'None' | 'HtmlAndText' | 'HtmlOnly' | 'TextOnly';
    Headers?: HeaderCollection;
    Attachments?: AttachmentCollection;
};

/**
 * A single header for an email message.
 */
export type MessageHeader = {
    /**
     * The header's name.
     */
    Name?: string;
    /**
     * The header's value.
     */
    Value?: string;
};

export type HeaderCollection = Array<MessageHeader>;

/**
 * An attachment for an email message.
 */
export type Attachment = {
    Name?: string;
    Content?: string;
    ContentType?: string;
    ContentID?: string;
};

export type AttachmentCollection = Array<Attachment>;

/**
 * The standard response when a postmark message is sent
 */
export type SendEmailResponse = {
    To?: string;
    SubmittedAt?: string;
    MessageID?: string;
    ErrorCode?: number;
    Message?: string;
};

/**
 * A Postmark API error.
 */
export type StandardPostmarkResponse = {
    ErrorCode?: number;
    Message?: string;
};

export type SendEmailData = {
    body?: SendEmailRequest;
    headers: {
        /**
         * The token associated with the Server on which this request will operate.
         */
        'X-Postmark-Server-Token': string;
    };
    path?: never;
    query?: never;
    url: '/email';
};

export type SendEmailErrors = {
    /**
     * An error was generated due to incorrect use of the API. See the Message associated with this response for more information.
     */
    422: StandardPostmarkResponse;
    /**
     * Indicates an internal server error occurred.
     */
    500: unknown;
};

export type SendEmailError = SendEmailErrors[keyof SendEmailErrors];

export type SendEmailResponses = {
    /**
     * OK
     */
    200: SendEmailResponse;
};

export type SendEmailResponse2 = SendEmailResponses[keyof SendEmailResponses];