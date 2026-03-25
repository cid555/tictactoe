board = ["1","2","3","4","5","6","7","8","9"]

print('Welcome to Tic-tac-toe')
print('...')
print('...')
print('...')
print('...')
print('...')
user_input = input('Where do you want to place your next Tic-tac-toe move? ')

board[int(user_input)-1] = 'X'
print(board)