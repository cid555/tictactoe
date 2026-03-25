board = ["1","2","3","4","5","6","7","8","9"]
done = False

def print_board():
    print(board[0], "|", board[1], "|", board[2])
    print("---------")
    print(board[3], "|", board[4], "|", board[5])
    print("---------")
    print(board[6], "|", board[7], "|", board[8])

print('...')

# Starting statement
print('Welcome to Tic-tac-toe')
print('...')
print('...')
print('...')
print('...')
print('...')

while(not done):
    user_input = input('Where do you want to place your next Tic-tac-toe move? Choose between 1-9: ')
    board[int(user_input)-1] = 'X'
    print_board()