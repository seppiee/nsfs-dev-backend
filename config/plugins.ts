module.exports = ({env}) => ({
    graphql: {
        enabled: true,
        config: {
          endpoint: "/graphql",
          shadowCRUD: true,
          playgroundAlways: true,
          defaultLimit: 10,
          maxLimit: 20,
          apolloServer: {
            tracing: true,
          },
        },
    },
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                accessKeyId: env('DO_SPACE_ACCESS_KEY'),
                secretAccessKey: env('DO_SPACE_SECRET_KEY'),
                endpoint: env('DO_SPACE_ENDPOINT'),
                params: {
                    Bucket: env('DO_SPACE_BUCKET'),
                },
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
})