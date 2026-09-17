export const formErrors = {
    required: 'required',
    invalidGitRepoSlug: 'invalidGitRepoSlug',
    invalidGitRepoBranch: 'invalidGitRepoBranch',
    invalidGitRepoRemoteUrl: 'invalidGitRepoRemoteUrl',
    invalidExternalId: 'invalidExternalId',
    invalidFileName: 'invalidFileName',
    messageRequiresContentOrFiles: 'messageRequiresContentOrFiles',
    agentConfigTooLarge: 'agentConfigTooLarge',
    invalidGcpResourceId: 'invalidGcpResourceId',
    invalidAzureResourceName: 'invalidAzureResourceName',
} as const

// The Azure resource name is interpolated into `https://<resourceName>.openai.azure.com`, so it has
// to stay a single DNS label. Azure allows alphanumerics and inner hyphens, up to 64 characters.
export const AZURE_RESOURCE_NAME_PATTERN = /^[A-Za-z0-9](?:[A-Za-z0-9-]{0,62}[A-Za-z0-9])?$/

export const SAFE_EXTERNAL_ID_PATTERN = /^(?!\.{1,2}$)[A-Za-z0-9._-]{1,128}$/
