board = ["1","2","3","4","5","6","7","8","9"]
done = False

def print_board():
    print(board[0], "|", board[1], "|", board[2])
    print("---------")
    print(board[3], "|", board[4], "|", board[5])
    print("---------")
    print(board[6], "|", board[7], "|", board[8])

def check_if_spot_filled(arg, game):
    if game[int(arg)-1] != 'X':
        return True
    else:
        print('_____That spot is already used!!!! Select another spot!!!!')
        return False

def input_validation(arg):
    if arg.isdigit():
        if(int(arg) > 9):
            return False
        else:
            return True
    else:
        return False

print('...')

# Starting statement
print_board()
print('...')
print('Welcome to Tic-tac-toe')
print('...')
print('...')
print('...')
print('...')
print('...')

# Game condition
while(not done):
    user_input = input('Where do you want to place your next Tic-tac-toe move? Choose between 1-9: ')
    if (input_validation(user_input)):
        if(check_if_spot_filled(user_input, board)):
            board[int(user_input)-1] = 'X'
        else:
            print('hi')
    else:
        print('Input is not a valid number!')


    print_board()