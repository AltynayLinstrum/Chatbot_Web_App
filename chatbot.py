# from sqlite3.dbapi2 import Statement
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

#Creating chatbot
chatBot = ChatBot("ChatBot")

#Creating trainer for the chatbot
trainer = ChatterBotCorpusTrainer(chatBot)

#Using the English language corpus, we will train the chatbot. To change the language or the area to train, update the line below
trainer.train("chatterbot.corpus.english.ai")

#Using chatBot instance and get response method, start training the bot with the data in the yml files about different topics in the EN langauge (in venv) 
# print(chatBot.get_response("What is AI"))

print("Hi, I am Chatbot!")
while True:
    query = input(">>>")
    print(chatBot.get_response(text=query, search_text=query))
