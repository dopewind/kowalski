# Imports
import discord  # duh
from discord.ext import commands
import os


# env varables
apollo_token = os.getenv('apollo_token')


client = discord.Client()


@client.event
async def on_message(message):
    print("- Message received -")
    print(str(message.content))

    message.content = message.content.lower()

    if message.author == client.user:
        return

    if str(message.author) == "spacemonk#5679":
        if message.content == "hello":
            await message.channel.send("Hello boss")
        elif message.content == "nice":
            await message.channel.send("noice")
    else:
        message.channel.send("who are you" + message.author + "?")


# awaiting argument
client = commands.Bot(command_prefix="!")


@client.command
async def command_call(ctx, arg):
    await ctx.send(arg)

client.run(apollo_token)
