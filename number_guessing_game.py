import tkinter as tk
from tkinter import messagebox
import random

class NumberGuessingGame:
    def __init__(self, root):
        self.root = root
        self.root.title("Number Guessing Game")

        # Initialize the game
        self.target_number = random.randint(1, 100)
        self.attempts = 0

        # Create UI elements
        self.create_widgets()

    def create_widgets(self):
        # Title label
        self.title_label = tk.Label(self.root, text="Guess the Number!", font=("Arial", 16))
        self.title_label.pack(pady=10)

        # Entry for guessing
        self.guess_entry = tk.Entry(self.root)
        self.guess_entry.pack(pady=10)

        # Submit button
        self.submit_button = tk.Button(self.root, text="Submit Guess", command=self.check_guess)
        self.submit_button.pack(pady=10)

        # Feedback label
        self.feedback_label = tk.Label(self.root, text="")
        self.feedback_label.pack(pady=10)

    def check_guess(self):
        try:
            guess = int(self.guess_entry.get())
            self.attempts += 1

            if guess < self.target_number:
                feedback = "Too low! Try again."
            elif guess > self.target_number:
                feedback = "Too high! Try again."
            else:
                feedback = f"Congratulations! You guessed the number in {self.attempts} attempts."
                messagebox.showinfo("Congratulations", feedback)
                self.reset_game()
                
            self.feedback_label.config(text=feedback)

        except ValueError:
            self.feedback_label.config(text="Please enter a valid number.")

    def reset_game(self):
        self.target_number = random.randint(1, 100)
        self.attempts = 0

if __name__ == "__main__":
    root = tk.Tk()
    game = NumberGuessingGame(root)
    root.mainloop()
