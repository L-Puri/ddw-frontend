import React from 'react'
//import { Card, Image, Text, Badge, Button, AppShell, Navbar, Header, Group, useMantineTheme } from '@mantine/core';
import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';


function TestPage() {
    
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  
  
  {/*const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
      ? theme.colors.dark[1]
: theme.colors.gray[7];*/}

  return (

    <Box sx={{ maxWidth: 300 }} mx="auto" shadow="sm" p="lg">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        
      <TextInput
          required
          label="Username"
          placeholder="your name "
          {...form.getInputProps('username')}
        />
        
        <TextInput
          required
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />

        <TextInput
          required
          label="Password"
          placeholder="*********"
          {...form.getInputProps('password')}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>

    /*<AppShell
      padding="md"
      navbar={<Navbar width={{ base: 100 }} height={500} p="xs">{
        <div>
            <a>Option 1</a>
            <a>Option 2</a>
        </div>
      }</Navbar>}
      header={<Header height={60} p="xs">{
        <div>
            <a>DDW</a>
            <a>Login/Sign Up</a>
        </div>
    }</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <div style={{ width: 340, margin: 'auto' }}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src="https://images.unsplash.com/photo-1560275619-4662e36fa65c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3300&q=80" height={160} alt="shark" />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>... Sharkfeeding in South Africa</Text>
          <Badge color="pink" variant="light">
            ToDo
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        An activity similar to extreme sports when it is performed as part of a dive, it allows people to get close to these large predators and generates strong sensations.
        </Text>

        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          See More Details!
        </Button>
      </Card>
    </div>
    </AppShell>*/


  )
}

export default TestPage

// import DdwLogo from './public/Ddw-Logo.png'
// <img src={DdwLogo} alt='ddw logo'/>