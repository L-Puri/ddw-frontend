import React from 'react'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';

function EntryCard() {

  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
: theme.colors.gray[7];

  return (
    <div style={{ width: 340, margin: 'auto' }}>
      <Card className='entry-card' shadow="sm" p="lg">
        <Card.Section >
          <Image src="https://images.unsplash.com/photo-1560275619-4662e36fa65c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3300&q=80" height={160} alt="shark" />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text className='card-title-text' weight={500}>... Sharkfeeding in South Africa</Text>
          <Badge color="pink" variant="light">
            ToDo
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        An activity similar to extreme sports when it is performed as part of a dive, it allows people to get close to these large predators and generates strong sensations.
        </Text>

        <Button className="card-btn" to="/details/:Id" variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          See More Details!
        </Button>
      </Card>
    </div>
  )
}

export default EntryCard

