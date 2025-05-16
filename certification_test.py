import random
from utils.quiz_runner import run_quiz
from data.all_questions import questions as all_questions

def certification_test():
    print("\n📝 CompTIA Security+ Certification Practice Test")
    print("You will be presented with 50 randomly selected questions.\n")

    sample = random.sample(all_questions, 50 if len(all_questions) >= 50 else len(all_questions))
    run_quiz(sample)

if __name__ == "__main__":
    certification_test()
