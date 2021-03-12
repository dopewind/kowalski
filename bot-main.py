# Imports
import discord
import discord  # duh
from discord.ext import commands
import os


# env varables
discord_token = os.getenv('discord_token')


class theClient(discord.Client):
    async def on_ready(self):
        print('Logged on as', self.user)

    async def on_message(self, message):
        # don't respond to ourselves
        if message.author == self.user:
            return

        if message.content == 'ping':
            await message.channel.send('pong')


client = theClient()
client.run(str(discord_token))
