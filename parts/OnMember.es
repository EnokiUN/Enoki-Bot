-Uses "ProcessFunctions" $FROM$ "BotToolKit" $AND$ "Guild" "Member" "MemberJoin" $FROM$ "DatCordLib"

>> Overwrite Function..Event MemberJoin(Member..DatCordLib.Member):
    <> Check (Member.JoinedGuild.id == "Pycord") => Send "Welcome to **Pycord!** :pycord: Pycord is a __**maintained fork**__ of `discord.py`. Head to <#881250579421212672> / <#881548884277596160> to get started. **Have a great time in here.** 👋"
