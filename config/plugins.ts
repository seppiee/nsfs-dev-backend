module.exports = ({env}) => ({
    graphql: {
        enabled: true,
        config: {
          endpoint: "/graphql",
          shadowCRUD: true,
          playgroundAlways: true,
          defaultLimit: 256,
          maxLimit: 256,
          apolloServer: {
            tracing: true,
          },
        },
    },
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                s3Options: {
                    accessKeyId: env('DO_SPACE_ACCESS_KEY'),
                    secretAccessKey: env('DO_SPACE_SECRET_KEY'),
                    endpoint: env('DO_SPACE_ENDPOINT'),
                    params: {
                        Bucket: env('DO_SPACE_BUCKET'),
                    },
                }
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
})