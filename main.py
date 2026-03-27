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

def player_checker(arg):
    if arg == 'X':
        return 'Player 1 or "X"'
    elif arg == 'O':
        return 'Player 2 or "O"'
    else:
        return 'Genie'

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
            gameboard[int(user_input)-1] = current_player
            if current_player == 'X':
                current_player = 'O'
            elif current_player == 'O':
                current_player = 'X'
            else:
                current_player = 'O'
    else:
        print('...')
        print('WARNING! THE INPUT YOU ENTERED IS NOT A VALID ENTRY!')
        print('...')

    print_gameboard()