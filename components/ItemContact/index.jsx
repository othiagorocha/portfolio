import Link from 'next/link'
import React from 'react'
import { Item, Icon, Text, LinkText } from './style'


export default function ItemContact({ IconFa, LinkContact = '', Email }) {
  return (
    <Item>
      <Icon>
        <IconFa />
      </Icon>
      <Link href={LinkContact}>
        <LinkText>{LinkContact}</LinkText>
      </Link>
      <Text>
        {Email}
      </Text>
    </Item>
  )
}
