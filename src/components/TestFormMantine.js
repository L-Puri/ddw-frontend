import React from 'react'
import { Button, Group, TextInput, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMantineTheme } from '@mantine/core';

function TestFormMantine() {

  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  
  
  const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
      ? theme.colors.dark[1]
: theme.colors.gray[7];

  return (
    <div>
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
    </div>
  )
}

export default TestFormMantine
