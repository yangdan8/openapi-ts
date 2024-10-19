// This file is auto-generated by @hey-api/openapi-ts

import type { Options } from '@hey-api/client-fetch';
import { queryOptions, type MutationOptions, type DefaultError, infiniteQueryOptions, type InfiniteData } from '@tanstack/svelte-query';
import type { CollectionFormatData, ComplexTypesData, ComplexParamsData, ComplexParamsError, ComplexParamsResponse, ImportData, ImportError, ImportResponse, GetApiVbyApiVersionSimpleOperationData, CallWithDefaultParametersData, CallWithDefaultOptionalParametersData, CallToTestOrderOfParamsData, DeprecatedCallData, CallWithDescriptionsData, TestErrorCodeData, TestErrorCodeError, TestErrorCodeResponse, FileResponseData, PostApiVbyApiVersionFormDataData, CallWithResultFromHeaderError, CallWithResultFromHeaderResponse, MultipartRequestData, NonAsciiæøåÆøÅöôêÊ字符串Data, NonAsciiæøåÆøÅöôêÊ字符串Error, NonAsciiæøåÆøÅöôêÊ字符串Response, PutWithFormUrlEncodedData, DeleteFooData3, CallWithParametersData, CallWithWeirdParameterNamesData, GetCallWithOptionalParamData, PostCallWithOptionalParamData, PostCallWithOptionalParamError, PostCallWithOptionalParamResponse, PostApiVbyApiVersionRequestBodyData, CallWithDuplicateResponsesError, CallWithDuplicateResponsesResponse, CallWithResponsesError, CallWithResponsesResponse, TypesData, UploadFileData, UploadFileError, UploadFileResponse } from '../types.gen';
import { client, CollectionFormatService, ComplexService, DefaultService, DefaultsService, DeprecatedService, DescriptionsService, DuplicateService, ErrorService, FileResponseService, FormDataService, HeaderService, MultipartService, MultipleTags1Service, NoContentService, NonAsciiÆøåÆøÅöôêÊService, ParametersService, RequestBodyService, ResponseService, SimpleService, TypesService, UploadService } from '../services.gen';

type QueryKey<TOptions extends Options> = [
    Pick<TOptions, 'baseUrl' | 'body' | 'headers' | 'path' | 'query'> & {
        _id: string;
        _infinite?: boolean;
    }
];

const createQueryKey = <TOptions extends Options>(id: string, options?: TOptions, infinite?: boolean): QueryKey<TOptions>[0] => {
    const params: QueryKey<TOptions>[0] = { _id: id, baseUrl: (options?.client ?? client).getConfig().baseUrl } as QueryKey<TOptions>[0];
    if (infinite) {
        params._infinite = infinite;
    }
    if (options?.body) {
        params.body = options.body;
    }
    if (options?.headers) {
        params.headers = options.headers;
    }
    if (options?.path) {
        params.path = options.path;
    }
    if (options?.query) {
        params.query = options.query;
    }
    return params;
};

export const collectionFormatQueryKey = (options: Options<CollectionFormatData>) => [
    createQueryKey('collectionFormat', options)
];

export const collectionFormatOptions = (options: Options<CollectionFormatData>) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await CollectionFormatService.collectionFormat({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: collectionFormatQueryKey(options)
}); };

export const complexTypesQueryKey = (options: Options<ComplexTypesData>) => [
    createQueryKey('complexTypes', options)
];

export const complexTypesOptions = (options: Options<ComplexTypesData>) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await ComplexService.complexTypes({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: complexTypesQueryKey(options)
}); };

export const complexParamsMutation = (options?: Partial<Options<ComplexParamsData>>) => { const mutationOptions: MutationOptions<ComplexParamsResponse, ComplexParamsError, Options<ComplexParamsData>> = {
    mutationFn: async (localOptions) => {
        const { data } = await ComplexService.complexParams({
            ...options,
            ...localOptions,
            throwOnError: true
        });
        return data;
    }
}; return mutationOptions; };

export const exportQueryKey = (options?: Options) => [
    createQueryKey('export', options)
];

export const exportOptions = (options?: Options) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await DefaultService.export({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: exportQueryKey(options)
}); };

export const importQueryKey = (options: Options<ImportData>) => [
    createQueryKey('import', options)
];

export const importOptions = (options: Options<ImportData>) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await DefaultService.import({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: importQueryKey(options)
}); };

export const importMutation = (options?: Partial<Options<ImportData>>) => { const mutationOptions: MutationOptions<ImportResponse, ImportError, Options<ImportData>> = {
    mutationFn: async (localOptions) => {
        const { data } = await DefaultService.import({
            ...options,
            ...localOptions,
            throwOnError: true
        });
        return data;
    }
}; return mutationOptions; };

export const getApiVbyApiVersionSimpleOperationQueryKey = (options: Options<GetApiVbyApiVersionSimpleOperationData>) => [
    createQueryKey('getApiVbyApiVersionSimpleOperation', options)
];

export const getApiVbyApiVersionSimpleOperationOptions = (options: Options<GetApiVbyApiVersionSimpleOperationData>) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await DefaultService.getApiVbyApiVersionSimpleOperation({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: getApiVbyApiVersionSimpleOperationQueryKey(options)
}); };

export const callWithDefaultParametersQueryKey = (options?: Options<CallWithDefaultParametersData>) => [
    createQueryKey('callWithDefaultParameters', options)
];

export const callWithDefaultParametersOptions = (options?: Options<CallWithDefaultParametersData>) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await DefaultsService.callWithDefaultParameters({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: callWithDefaultParametersQueryKey(options)
}); };

export const callWithDefaultOptionalParametersQueryKey = (options?: Options<CallWithDefaultOptionalParametersData>) => [
    createQueryKey('callWithDefaultOptionalParameters', options)
];

export const callWithDefaultOptionalParametersOptions = (options?: Options<CallWithDefaultOptionalParametersData>) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await DefaultsService.callWithDefaultOptionalParameters({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: callWithDefaultOptionalParametersQueryKey(options)
}); };

export const callWithDefaultOptionalParametersMutation = (options?: Partial<Options<CallWithDefaultOptionalParametersData>>) => { const mutationOptions: MutationOptions<void, DefaultError, Options<CallWithDefaultOptionalParametersData>> = {
    mutationFn: async (localOptions) => {
        const { data } = await DefaultsService.callWithDefaultOptionalParameters({
            ...options,
            ...localOptions,
            throwOnError: true
        });
        return data;
    }
}; return mutationOptions; };

export const callToTestOrderOfParamsMutation = (options?: Partial<Options<CallToTestOrderOfParamsData>>) => { const mutationOptions: MutationOptions<void, DefaultError, Options<CallToTestOrderOfParamsData>> = {
    mutationFn: async (localOptions) => {
        const { data } = await DefaultsService.callToTestOrderOfParams({
            ...options,
            ...localOptions,
            throwOnError: true
        });
        return data;
    }
}; return mutationOptions; };

export const deprecatedCallQueryKey = (options: Options<DeprecatedCallData>) => [
    createQueryKey('deprecatedCall', options)
];

export const deprecatedCallOptions = (options: Options<DeprecatedCallData>) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await DeprecatedService.deprecatedCall({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: deprecatedCallQueryKey(options)
}); };

export const deprecatedCallMutation = (options?: Partial<Options<DeprecatedCallData>>) => { const mutationOptions: MutationOptions<void, DefaultError, Options<DeprecatedCallData>> = {
    mutationFn: async (localOptions) => {
        const { data } = await DeprecatedService.deprecatedCall({
            ...options,
            ...localOptions,
            throwOnError: true
        });
        return data;
    }
}; return mutationOptions; };

export const callWithDescriptionsQueryKey = (options?: Options<CallWithDescriptionsData>) => [
    createQueryKey('callWithDescriptions', options)
];

export const callWithDescriptionsOptions = (options?: Options<CallWithDescriptionsData>) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await DescriptionsService.callWithDescriptions({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: callWithDescriptionsQueryKey(options)
}); };

export const callWithDescriptionsMutation = (options?: Partial<Options<CallWithDescriptionsData>>) => { const mutationOptions: MutationOptions<void, DefaultError, Options<CallWithDescriptionsData>> = {
    mutationFn: async (localOptions) => {
        const { data } = await DescriptionsService.callWithDescriptions({
            ...options,
            ...localOptions,
            throwOnError: true
        });
        return data;
    }
}; return mutationOptions; };

export const duplicateNameQueryKey = (options?: Options) => [
    createQueryKey('duplicateName', options)
];

export const duplicateNameOptions = (options?: Options) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await DuplicateService.duplicateName({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: duplicateNameQueryKey(options)
}); };

export const duplicateName1QueryKey = (options?: Options) => [
    createQueryKey('duplicateName1', options)
];

export const duplicateName1Options = (options?: Options) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await DuplicateService.duplicateName1({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: duplicateName1QueryKey(options)
}); };

export const duplicateName1Mutation = (options?: Partial<Options>) => { const mutationOptions: MutationOptions<void, DefaultError, Options> = {
    mutationFn: async (localOptions) => {
        const { data } = await DuplicateService.duplicateName1({
            ...options,
            ...localOptions,
            throwOnError: true
        });
        return data;
    }
}; return mutationOptions; };

export const duplicateName2Mutation = (options?: Partial<Options>) => { const mutationOptions: MutationOptions<void, DefaultError, Options> = {
    mutationFn: async (localOptions) => {
        const { data } = await DuplicateService.duplicateName2({
            ...options,
            ...localOptions,
            throwOnError: true
        });
        return data;
    }
}; return mutationOptions; };

export const duplicateName3Mutation = (options?: Partial<Options>) => { const mutationOptions: MutationOptions<void, DefaultError, Options> = {
    mutationFn: async (localOptions) => {
        const { data } = await DuplicateService.duplicateName3({
            ...options,
            ...localOptions,
            throwOnError: true
        });
        return data;
    }
}; return mutationOptions; };

export const testErrorCodeQueryKey = (options: Options<TestErrorCodeData>) => [
    createQueryKey('testErrorCode', options)
];

export const testErrorCodeOptions = (options: Options<TestErrorCodeData>) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await ErrorService.testErrorCode({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: testErrorCodeQueryKey(options)
}); };

export const testErrorCodeMutation = (options?: Partial<Options<TestErrorCodeData>>) => { const mutationOptions: MutationOptions<TestErrorCodeResponse, TestErrorCodeError, Options<TestErrorCodeData>> = {
    mutationFn: async (localOptions) => {
        const { data } = await ErrorService.testErrorCode({
            ...options,
            ...localOptions,
            throwOnError: true
        });
        return data;
    }
}; return mutationOptions; };

export const fileResponseQueryKey = (options: Options<FileResponseData>) => [
    createQueryKey('fileResponse', options)
];

export const fileResponseOptions = (options: Options<FileResponseData>) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await FileResponseService.fileResponse({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: fileResponseQueryKey(options)
}); };

export const postApiVbyApiVersionFormDataQueryKey = (options?: Options<PostApiVbyApiVersionFormDataData>) => [
    createQueryKey('postApiVbyApiVersionFormData', options)
];

export const postApiVbyApiVersionFormDataOptions = (options?: Options<PostApiVbyApiVersionFormDataData>) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await FormDataService.postApiVbyApiVersionFormData({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: postApiVbyApiVersionFormDataQueryKey(options)
}); };

export const postApiVbyApiVersionFormDataMutation = (options?: Partial<Options<PostApiVbyApiVersionFormDataData>>) => { const mutationOptions: MutationOptions<void, DefaultError, Options<PostApiVbyApiVersionFormDataData>> = {
    mutationFn: async (localOptions) => {
        const { data } = await FormDataService.postApiVbyApiVersionFormData({
            ...options,
            ...localOptions,
            throwOnError: true
        });
        return data;
    }
}; return mutationOptions; };

export const callWithResultFromHeaderQueryKey = (options?: Options) => [
    createQueryKey('callWithResultFromHeader', options)
];

export const callWithResultFromHeaderOptions = (options?: Options) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await HeaderService.callWithResultFromHeader({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: callWithResultFromHeaderQueryKey(options)
}); };

export const callWithResultFromHeaderMutation = (options?: Partial<Options>) => { const mutationOptions: MutationOptions<CallWithResultFromHeaderResponse, CallWithResultFromHeaderError, Options> = {
    mutationFn: async (localOptions) => {
        const { data } = await HeaderService.callWithResultFromHeader({
            ...options,
            ...localOptions,
            throwOnError: true
        });
        return data;
    }
}; return mutationOptions; };

export const multipartRequestQueryKey = (options?: Options<MultipartRequestData>) => [
    createQueryKey('multipartRequest', options)
];

export const multipartRequestOptions = (options?: Options<MultipartRequestData>) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await MultipartService.multipartRequest({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: multipartRequestQueryKey(options)
}); };

export const multipartRequestMutation = (options?: Partial<Options<MultipartRequestData>>) => { const mutationOptions: MutationOptions<void, DefaultError, Options<MultipartRequestData>> = {
    mutationFn: async (localOptions) => {
        const { data } = await MultipartService.multipartRequest({
            ...options,
            ...localOptions,
            throwOnError: true
        });
        return data;
    }
}; return mutationOptions; };

export const multipartResponseQueryKey = (options?: Options) => [
    createQueryKey('multipartResponse', options)
];

export const multipartResponseOptions = (options?: Options) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await MultipartService.multipartResponse({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: multipartResponseQueryKey(options)
}); };

export const dummyAQueryKey = (options?: Options) => [
    createQueryKey('dummyA', options)
];

export const dummyAOptions = (options?: Options) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await MultipleTags1Service.dummyA({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: dummyAQueryKey(options)
}); };

export const dummyBQueryKey = (options?: Options) => [
    createQueryKey('dummyB', options)
];

export const dummyBOptions = (options?: Options) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await MultipleTags1Service.dummyB({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: dummyBQueryKey(options)
}); };

export const callWithNoContentResponseQueryKey = (options?: Options) => [
    createQueryKey('callWithNoContentResponse', options)
];

export const callWithNoContentResponseOptions = (options?: Options) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await NoContentService.callWithNoContentResponse({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: callWithNoContentResponseQueryKey(options)
}); };

export const callWithResponseAndNoContentResponseQueryKey = (options?: Options) => [
    createQueryKey('callWithResponseAndNoContentResponse', options)
];

export const callWithResponseAndNoContentResponseOptions = (options?: Options) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await NoContentService.callWithResponseAndNoContentResponse({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: callWithResponseAndNoContentResponseQueryKey(options)
}); };

export const nonAsciiæøåÆøÅöôêÊ字符串QueryKey = (options: Options<NonAsciiæøåÆøÅöôêÊ字符串Data>) => [
    createQueryKey('nonAsciiæøåÆøÅöôêÊ字符串', options)
];

export const nonAsciiæøåÆøÅöôêÊ字符串Options = (options: Options<NonAsciiæøåÆøÅöôêÊ字符串Data>) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await NonAsciiÆøåÆøÅöôêÊService.nonAsciiæøåÆøÅöôêÊ字符串({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: nonAsciiæøåÆøÅöôêÊ字符串QueryKey(options)
}); };

export const nonAsciiæøåÆøÅöôêÊ字符串Mutation = (options?: Partial<Options<NonAsciiæøåÆøÅöôêÊ字符串Data>>) => { const mutationOptions: MutationOptions<NonAsciiæøåÆøÅöôêÊ字符串Response, NonAsciiæøåÆøÅöôêÊ字符串Error, Options<NonAsciiæøåÆøÅöôêÊ字符串Data>> = {
    mutationFn: async (localOptions) => {
        const { data } = await NonAsciiÆøåÆøÅöôêÊService.nonAsciiæøåÆøÅöôêÊ字符串({
            ...options,
            ...localOptions,
            throwOnError: true
        });
        return data;
    }
}; return mutationOptions; };

export const putWithFormUrlEncodedMutation = (options?: Partial<Options<PutWithFormUrlEncodedData>>) => { const mutationOptions: MutationOptions<void, DefaultError, Options<PutWithFormUrlEncodedData>> = {
    mutationFn: async (localOptions) => {
        const { data } = await NonAsciiÆøåÆøÅöôêÊService.putWithFormUrlEncoded({
            ...options,
            ...localOptions,
            throwOnError: true
        });
        return data;
    }
}; return mutationOptions; };

export const deleteFooMutation = (options?: Partial<Options<DeleteFooData3>>) => { const mutationOptions: MutationOptions<void, DefaultError, Options<DeleteFooData3>> = {
    mutationFn: async (localOptions) => {
        const { data } = await ParametersService.deleteFoo({
            ...options,
            ...localOptions,
            throwOnError: true
        });
        return data;
    }
}; return mutationOptions; };

export const callWithParametersQueryKey = (options: Options<CallWithParametersData>) => [
    createQueryKey('callWithParameters', options)
];

export const callWithParametersOptions = (options: Options<CallWithParametersData>) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await ParametersService.callWithParameters({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: callWithParametersQueryKey(options)
}); };

const createInfiniteParams = <K extends Pick<QueryKey<Options>[0], 'body' | 'headers' | 'path' | 'query'>>(queryKey: QueryKey<Options>, page: K) => {
    const params = queryKey[0];
    if (page.body) {
        params.body = {
            ...queryKey[0].body as any,
            ...page.body as any
        };
    }
    if (page.headers) {
        params.headers = {
            ...queryKey[0].headers,
            ...page.headers
        };
    }
    if (page.path) {
        params.path = {
            ...queryKey[0].path,
            ...page.path
        };
    }
    if (page.query) {
        params.query = {
            ...queryKey[0].query,
            ...page.query
        };
    }
    return params as unknown as typeof page;
};

export const callWithParametersInfiniteQueryKey = (options: Options<CallWithParametersData>): QueryKey<Options<CallWithParametersData>> => [
    createQueryKey('callWithParameters', options, true)
];

export const callWithParametersInfiniteOptions = (options: Options<CallWithParametersData>) => { return infiniteQueryOptions<void, DefaultError, InfiniteData<void>, QueryKey<Options<CallWithParametersData>>, string | Pick<QueryKey<Options<CallWithParametersData>>[0], 'body' | 'headers' | 'path' | 'query'>>(
// @ts-ignore
{
    queryFn: async ({ pageParam, queryKey }) => {
        // @ts-ignore
        const page: Pick<QueryKey<Options<CallWithParametersData>>[0], 'body' | 'headers' | 'path' | 'query'> = typeof pageParam === 'object' ? pageParam : {
            query: {
                cursor: pageParam
            }
        };
        const params = createInfiniteParams(queryKey, page);
        const { data } = await ParametersService.callWithParameters({
            ...options,
            ...params,
            throwOnError: true
        });
        return data;
    },
    queryKey: callWithParametersInfiniteQueryKey(options)
}); };

export const callWithParametersMutation = (options?: Partial<Options<CallWithParametersData>>) => { const mutationOptions: MutationOptions<void, DefaultError, Options<CallWithParametersData>> = {
    mutationFn: async (localOptions) => {
        const { data } = await ParametersService.callWithParameters({
            ...options,
            ...localOptions,
            throwOnError: true
        });
        return data;
    }
}; return mutationOptions; };

export const callWithWeirdParameterNamesQueryKey = (options: Options<CallWithWeirdParameterNamesData>) => [
    createQueryKey('callWithWeirdParameterNames', options)
];

export const callWithWeirdParameterNamesOptions = (options: Options<CallWithWeirdParameterNamesData>) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await ParametersService.callWithWeirdParameterNames({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: callWithWeirdParameterNamesQueryKey(options)
}); };

export const callWithWeirdParameterNamesMutation = (options?: Partial<Options<CallWithWeirdParameterNamesData>>) => { const mutationOptions: MutationOptions<void, DefaultError, Options<CallWithWeirdParameterNamesData>> = {
    mutationFn: async (localOptions) => {
        const { data } = await ParametersService.callWithWeirdParameterNames({
            ...options,
            ...localOptions,
            throwOnError: true
        });
        return data;
    }
}; return mutationOptions; };

export const getCallWithOptionalParamQueryKey = (options: Options<GetCallWithOptionalParamData>) => [
    createQueryKey('getCallWithOptionalParam', options)
];

export const getCallWithOptionalParamOptions = (options: Options<GetCallWithOptionalParamData>) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await ParametersService.getCallWithOptionalParam({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: getCallWithOptionalParamQueryKey(options)
}); };

export const getCallWithOptionalParamInfiniteQueryKey = (options: Options<GetCallWithOptionalParamData>): QueryKey<Options<GetCallWithOptionalParamData>> => [
    createQueryKey('getCallWithOptionalParam', options, true)
];

export const getCallWithOptionalParamInfiniteOptions = (options: Options<GetCallWithOptionalParamData>) => { return infiniteQueryOptions<void, DefaultError, InfiniteData<void>, QueryKey<Options<GetCallWithOptionalParamData>>, number | Pick<QueryKey<Options<GetCallWithOptionalParamData>>[0], 'body' | 'headers' | 'path' | 'query'>>(
// @ts-ignore
{
    queryFn: async ({ pageParam, queryKey }) => {
        // @ts-ignore
        const page: Pick<QueryKey<Options<GetCallWithOptionalParamData>>[0], 'body' | 'headers' | 'path' | 'query'> = typeof pageParam === 'object' ? pageParam : {
            query: {
                page: pageParam
            }
        };
        const params = createInfiniteParams(queryKey, page);
        const { data } = await ParametersService.getCallWithOptionalParam({
            ...options,
            ...params,
            throwOnError: true
        });
        return data;
    },
    queryKey: getCallWithOptionalParamInfiniteQueryKey(options)
}); };

export const postCallWithOptionalParamQueryKey = (options: Options<PostCallWithOptionalParamData>) => [
    createQueryKey('postCallWithOptionalParam', options)
];

export const postCallWithOptionalParamOptions = (options: Options<PostCallWithOptionalParamData>) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await ParametersService.postCallWithOptionalParam({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: postCallWithOptionalParamQueryKey(options)
}); };

export const postCallWithOptionalParamInfiniteQueryKey = (options: Options<PostCallWithOptionalParamData>): QueryKey<Options<PostCallWithOptionalParamData>> => [
    createQueryKey('postCallWithOptionalParam', options, true)
];

export const postCallWithOptionalParamInfiniteOptions = (options: Options<PostCallWithOptionalParamData>) => { return infiniteQueryOptions<PostCallWithOptionalParamResponse, PostCallWithOptionalParamError, InfiniteData<PostCallWithOptionalParamResponse>, QueryKey<Options<PostCallWithOptionalParamData>>, number | Pick<QueryKey<Options<PostCallWithOptionalParamData>>[0], 'body' | 'headers' | 'path' | 'query'>>(
// @ts-ignore
{
    queryFn: async ({ pageParam, queryKey }) => {
        // @ts-ignore
        const page: Pick<QueryKey<Options<PostCallWithOptionalParamData>>[0], 'body' | 'headers' | 'path' | 'query'> = typeof pageParam === 'object' ? pageParam : {
            body: {
                offset: pageParam
            }
        };
        const params = createInfiniteParams(queryKey, page);
        const { data } = await ParametersService.postCallWithOptionalParam({
            ...options,
            ...params,
            throwOnError: true
        });
        return data;
    },
    queryKey: postCallWithOptionalParamInfiniteQueryKey(options)
}); };

export const postCallWithOptionalParamMutation = (options?: Partial<Options<PostCallWithOptionalParamData>>) => { const mutationOptions: MutationOptions<PostCallWithOptionalParamResponse, PostCallWithOptionalParamError, Options<PostCallWithOptionalParamData>> = {
    mutationFn: async (localOptions) => {
        const { data } = await ParametersService.postCallWithOptionalParam({
            ...options,
            ...localOptions,
            throwOnError: true
        });
        return data;
    }
}; return mutationOptions; };

export const postApiVbyApiVersionRequestBodyQueryKey = (options?: Options<PostApiVbyApiVersionRequestBodyData>) => [
    createQueryKey('postApiVbyApiVersionRequestBody', options)
];

export const postApiVbyApiVersionRequestBodyOptions = (options?: Options<PostApiVbyApiVersionRequestBodyData>) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await RequestBodyService.postApiVbyApiVersionRequestBody({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: postApiVbyApiVersionRequestBodyQueryKey(options)
}); };

export const postApiVbyApiVersionRequestBodyMutation = (options?: Partial<Options<PostApiVbyApiVersionRequestBodyData>>) => { const mutationOptions: MutationOptions<void, DefaultError, Options<PostApiVbyApiVersionRequestBodyData>> = {
    mutationFn: async (localOptions) => {
        const { data } = await RequestBodyService.postApiVbyApiVersionRequestBody({
            ...options,
            ...localOptions,
            throwOnError: true
        });
        return data;
    }
}; return mutationOptions; };

export const callWithResponseQueryKey = (options?: Options) => [
    createQueryKey('callWithResponse', options)
];

export const callWithResponseOptions = (options?: Options) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await ResponseService.callWithResponse({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: callWithResponseQueryKey(options)
}); };

export const callWithDuplicateResponsesQueryKey = (options?: Options) => [
    createQueryKey('callWithDuplicateResponses', options)
];

export const callWithDuplicateResponsesOptions = (options?: Options) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await ResponseService.callWithDuplicateResponses({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: callWithDuplicateResponsesQueryKey(options)
}); };

export const callWithDuplicateResponsesMutation = (options?: Partial<Options>) => { const mutationOptions: MutationOptions<CallWithDuplicateResponsesResponse, CallWithDuplicateResponsesError, Options> = {
    mutationFn: async (localOptions) => {
        const { data } = await ResponseService.callWithDuplicateResponses({
            ...options,
            ...localOptions,
            throwOnError: true
        });
        return data;
    }
}; return mutationOptions; };

export const callWithResponsesMutation = (options?: Partial<Options>) => { const mutationOptions: MutationOptions<CallWithResponsesResponse, CallWithResponsesError, Options> = {
    mutationFn: async (localOptions) => {
        const { data } = await ResponseService.callWithResponses({
            ...options,
            ...localOptions,
            throwOnError: true
        });
        return data;
    }
}; return mutationOptions; };

export const apiVVersionOdataControllerCountQueryKey = (options?: Options) => [
    createQueryKey('apiVVersionOdataControllerCount', options)
];

export const apiVVersionOdataControllerCountOptions = (options?: Options) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await SimpleService.apiVVersionOdataControllerCount({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: apiVVersionOdataControllerCountQueryKey(options)
}); };

export const getCallWithoutParametersAndResponseQueryKey = (options?: Options) => [
    createQueryKey('getCallWithoutParametersAndResponse', options)
];

export const getCallWithoutParametersAndResponseOptions = (options?: Options) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await SimpleService.getCallWithoutParametersAndResponse({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: getCallWithoutParametersAndResponseQueryKey(options)
}); };

export const putCallWithoutParametersAndResponseMutation = (options?: Partial<Options>) => { const mutationOptions: MutationOptions<void, DefaultError, Options> = {
    mutationFn: async (localOptions) => {
        const { data } = await SimpleService.putCallWithoutParametersAndResponse({
            ...options,
            ...localOptions,
            throwOnError: true
        });
        return data;
    }
}; return mutationOptions; };

export const postCallWithoutParametersAndResponseQueryKey = (options?: Options) => [
    createQueryKey('postCallWithoutParametersAndResponse', options)
];

export const postCallWithoutParametersAndResponseOptions = (options?: Options) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await SimpleService.postCallWithoutParametersAndResponse({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: postCallWithoutParametersAndResponseQueryKey(options)
}); };

export const postCallWithoutParametersAndResponseMutation = (options?: Partial<Options>) => { const mutationOptions: MutationOptions<void, DefaultError, Options> = {
    mutationFn: async (localOptions) => {
        const { data } = await SimpleService.postCallWithoutParametersAndResponse({
            ...options,
            ...localOptions,
            throwOnError: true
        });
        return data;
    }
}; return mutationOptions; };

export const deleteCallWithoutParametersAndResponseMutation = (options?: Partial<Options>) => { const mutationOptions: MutationOptions<void, DefaultError, Options> = {
    mutationFn: async (localOptions) => {
        const { data } = await SimpleService.deleteCallWithoutParametersAndResponse({
            ...options,
            ...localOptions,
            throwOnError: true
        });
        return data;
    }
}; return mutationOptions; };

export const patchCallWithoutParametersAndResponseMutation = (options?: Partial<Options>) => { const mutationOptions: MutationOptions<void, DefaultError, Options> = {
    mutationFn: async (localOptions) => {
        const { data } = await SimpleService.patchCallWithoutParametersAndResponse({
            ...options,
            ...localOptions,
            throwOnError: true
        });
        return data;
    }
}; return mutationOptions; };

export const typesQueryKey = (options: Options<TypesData>) => [
    createQueryKey('types', options)
];

export const typesOptions = (options: Options<TypesData>) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await TypesService.types({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: typesQueryKey(options)
}); };

export const uploadFileQueryKey = (options: Options<UploadFileData>) => [
    createQueryKey('uploadFile', options)
];

export const uploadFileOptions = (options: Options<UploadFileData>) => { return queryOptions({
    queryFn: async ({ queryKey }) => {
        const { data } = await UploadService.uploadFile({
            ...options,
            ...queryKey[0],
            throwOnError: true
        });
        return data;
    },
    queryKey: uploadFileQueryKey(options)
}); };

export const uploadFileMutation = (options?: Partial<Options<UploadFileData>>) => { const mutationOptions: MutationOptions<UploadFileResponse, UploadFileError, Options<UploadFileData>> = {
    mutationFn: async (localOptions) => {
        const { data } = await UploadService.uploadFile({
            ...options,
            ...localOptions,
            throwOnError: true
        });
        return data;
    }
}; return mutationOptions; };