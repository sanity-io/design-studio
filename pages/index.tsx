import {Card, Heading, Stack, Text} from '@sanity/ui'

export default function IndexPage() {
  return (
    <Card style={{minHeight: '100%'}}>
      <Stack padding={4} space={4}>
        <Heading as="h1">Welcome</Heading>
        <Text as="p">Index</Text>
      </Stack>
    </Card>
  )
}
