import random

def run_quiz(questions):
    random.shuffle(questions)  # Shuffle question order
    score = 0

    for idx, q in enumerate(questions, 1):
        print(f"\n{idx}. {q['question']}")

        # Shuffle choices and map back to correct answer
        shuffled_choices = q["choices"].copy()
        random.shuffle(shuffled_choices)

        # Get the correct answer's original text
        correct_choice = q["choices"][ord(q["answer"].upper()) - 65]
        new_answer_index = shuffled_choices.index(correct_choice)
        correct_letter = chr(65 + new_answer_index)

        # Display shuffled choices
        for i, choice in enumerate(shuffled_choices):
            print(f"{chr(65 + i)}. {choice}")

        user_input = input("Your answer (A/B/C/D): ").strip().upper()
        if user_input == correct_letter:
            print("✅ Correct!")
            score += 1
        else:
            print(f"❌ Incorrect. Correct answer: {correct_letter}")

    # Final results
    total = len(questions)
    percentage = (score / total) * 100
    scaled_score = int((score / total) * 900)
    passed = scaled_score >= 750

    print("\n📘 Test Complete!")
    print(f"✔️ Correct Answers: {score}/{total}")
    print(f"📊 Percentage: {percentage:.1f}%")
    print(f"🧮 Scaled Score: {scaled_score}/900")
    print("🎉 ✅ PASS" if passed else "❌ FAIL – Keep Studying!")

