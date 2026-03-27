gameboard = ["1","2","3","4","5","6","7","8","9"]
done = False

current_player = 'X'

def print_gameboard():
    print("---------------------------------")
    print("")
    print(gameboard[0], "|", gameboard[1], "|", gameboard[2])
    print("---------")
    print(gameboard[3], "|", gameboard[4], "|", gameboard[5])
    print("---------")
    print(gameboard[6], "|", gameboard[7], "|", gameboard[8])
    print("")

def check_if_spot_filled(arg, game):
    if game[int(arg) - 1] != 'X' and game[int(arg) - 1] != 'O':
        return True
    else:
        print('...')
        print('WARNING! That spot is already used! Select another spot!')
        print('...')
        return False

def input_validation(arg):
    if not arg.isdigit():
        return False
    num = int(arg)
    return 1 <= num <= 9

def check_tie(game):
    for spot in game:
        if spot != "X" and spot != "O":
            return False
    return True

def player_checker(arg):
    if arg == 'X':
        return 'Player 1 or "X"'
    elif arg == 'O':
        return 'Player 2 or "O"'
    else:
        return 'Genie'

def check_winner(game):
    if game[0] == game[1] == game[2]:
        return True
    elif game[3] == game[4] == game[5]:
        return True
    elif game[6] == game[7] == game[8]:
        return True
    elif game[0] == game[3] == game[6]:
        return True
    elif game[1] == game[4] == game[7]:
        return True
    elif game[2] == game[5] == game[8]:
        return True
    elif game[0] == game[4] == game[8]:
        return True
    elif game[2] == game[4] == game[6]:
        return True
    else:
        return False

# Starting of the GAME
# Starting of the GAME
# Starting of the GAME
print_gameboard()
print('Welcome to Tic-tac-toe')
print('...')
print('...')

# Game condition
while not done:
    print(f'Current player is: {player_checker(current_player)}')
    print("---------------------------------")
    user_input = input('Place your next move by choosing between 1-9: ')
    if input_validation(user_input):
        if check_if_spot_filled(user_input, gameboard):
            gameboard[int(user_input) - 1] = current_player

            if check_winner(gameboard):
                print('...')
                print(f'{player_checker(current_player)} WINS!!!!!')
                print('...')
                done = True
            elif check_tie(gameboard):
                print_gameboard()
                print("The game has ended as a tie!")
                done = True

            else:
                if current_player == 'X':
                    current_player = 'O'
                else:
                    current_player = 'X'
    else:
        print('...')
        print('WARNING! THE INPUT YOU ENTERED IS NOT A VALID ENTRY!')
        print('...')

    print_gameboard()