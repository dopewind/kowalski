# Imports
import discord
from discord import message  # duh
from discord.ext import commands
import os
import logging

from testing import get_iss
# env varables
discord_token = os.getenv('discord_token')


logger = logging.getLogger('discord')
logger.setLevel(logging.DEBUG)
handler = logging.FileHandler(
    filename='discord.log', encoding='utf-8', mode='w')
handler.setFormatter(logging.Formatter(
    '%(asctime)s:%(levelname)s:%(name)s: %(message)s'))
logger.addHandler(handler)


class theClient(discord.Client):
    async def on_ready(self):
        print('Logged on as', self.user)

    async def on_message(self, message):
        # don't respond to ourselves
        message.content = message.content.lower()

        if message.author == self.user:
            return

        if message.content == 'ping':
            await message.channel.send('pong')

        if message.content == 'where iss':
            await message.channel.send(get_iss())


client = theClient()
client.run(str(discord_token))
