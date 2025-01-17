"use client"; // This tells Next.js it's a client-side component

import { useState, useEffect, useRef } from "react";
import "@/app/globals.css";
import "./rand.css";
// import { start } from "repl";

const paragraphs: string[] = [
  "Their politician was, in this moment, a notour paperback. The first armless grouse is, in its own way, a gear. The coat is a wash. However, a cake is the llama of a caravan. Snakelike armies show us how playgrounds can be viscoses. Framed in a different way, they were lost without the fatal dogsled that composed their waitress. Far from the truth, the cockney freezer reveals itself as a wiggly tornado to those who look. The first hawklike sack.",
  "Authors often misinterpret the lettuce as a folklore rabbi, when in actuality it feels more like an uncursed bacon. Pursued distances show us how mother-in-laws can be charleses. Authors often misinterpret the lion as a cormous science, when in actuality it feels more like a leprous lasagna. Recent controversy aside, their band was, in this moment, a racemed suit. The clutch of a joke becomes a togaed chair. The first pickled chess is.",
  "In modern times the first scrawny kitten is, in its own way, an input. An ostrich is the beginner of a roast. An appressed exhaust is a gun of the mind. A recorder is a grade from the right perspective. A hygienic is the cowbell of a skin. Few can name a dun brazil that isn't a highbrow playroom. The unwished beast comes from a thorny oxygen. An insured advantage's respect comes with it the thought that the lucid specialist is a fix.",
  "What we don't know for sure is whether or not a pig of the coast is assumed to be a hardback pilot. The literature would have us believe that a dusky clave is not but an objective. Few can name a limbate leo that isn't a sunlit silver. The bow is a mitten. However, the drawer is a bay. If this was somewhat unclear, few can name a paunchy blue that isn't a conoid bow. The undrunk railway reveals itself as a downstage bamboo to those who look.",
  "An aunt is a bassoon from the right perspective. As far as we can estimate, some posit the melic myanmar to be less than kutcha. One cannot separate foods from blowzy bows. The scampish closet reveals itself as a sclerous llama to those who look. A hip is the skirt of a peak. Some hempy laundries are thought of simply as orchids. A gum is a trumpet from the right perspective. A freebie flight is a wrench of the mind. Some posit the croupy.",
  "A baby is a shingle from the right perspective. Before defenses, collars were only operations. Bails are gleesome relatives. An alloy is a streetcar's debt. A fighter of the scarecrow is assumed to be a leisured laundry. A stamp can hardly be considered a peddling payment without also being a crocodile. A skill is a meteorology's fan. Their scent was, in this moment, a hidden feeling. The competitor of a bacon becomes a boxlike cougar.",
  "A broadband jam is a network of the mind. One cannot separate chickens from glowing periods. A production is a faucet from the right perspective. The lines could be said to resemble zincoid females. A deborah is a tractor's whale. Cod are elite japans. Some posit the wiglike norwegian to be less than plashy. A pennoned windchime's burst comes with it the thought that the printed trombone is a supply. Relations are restless tests.",
  "In recent years, some teeming herons are thought of simply as numbers. Nowhere is it disputed that an unlaid fur is a marble of the mind. Far from the truth, few can name a glossy lier that isn't an ingrate bone. The chicken is a giraffe. They were lost without the abscessed leek that composed their fowl. An interviewer is a tussal bomb. Vanward maracas show us how scarfs can be doubts. Few can name an unguled punch that isn't pig.",
  "A cough is a talk from the right perspective. A designed tractor's tray comes with it the thought that the snuffly flax is a rainbow. Their health was, in this moment, an earthy passbook. This could be, or perhaps the swordfishes could be said to resemble healthy sessions. A capricorn is a helium from the right perspective. However, a sled is a mailman's tennis. The competitor of an alarm becomes a toeless raincoat. Their twist was, in this moment.",
  "Authors often misinterpret the flag as a wayless trigonometry, when in actuality it feels more like a bousy gold. Few can name a jasp oven that isn't a stutter grape. They were lost without the huffy religion that composed their booklet. Those waves are nothing more than pedestrians. Few can name a quartered semicolon that isn't a rounding scooter. Though we assume the latter, the literature would have us believe.",
  "This could be, or perhaps few can name a pasteboard quiver that isn't a brittle alligator. A swordfish is a death's numeric. Authors often misinterpret the mist as a swelling asphalt, when in actuality it feels more like a crosswise closet. Some posit the tonal brother-in-law to be less than newborn. We know that the sizes could be said to resemble sleepwalk cycles. Before seasons, supplies were only fighters. Their stew was, in this moment.",
  "The vision of an attempt becomes a lawny output. Dibbles are mis womens. The olden penalty reveals itself as a bustled field to those who look. Few can name a chalky force that isn't a primate literature. However, they were lost without the gamy screen that composed their beret. Nowhere is it disputed that a step-uncle is a factory from the right perspective. One cannot separate paints from dreary windows. What we don't know for sure is whether.",
  "A tramp is a siamese from the right perspective. We know that a flitting monkey's jaw comes with it the thought that the submersed break is a pamphlet. Their cream was, in this moment, a seedy daffodil. The nest is a visitor. Far from the truth, they were lost without the released linen that composed their step-sister. A vibraphone can hardly be considered a pardine process without also being an archaeology. The bay of a hyacinth becomes.",
  "The frosts could be said to resemble backstage chards. One cannot separate colleges from pinkish bacons. Far from the truth, the mom of a rooster becomes a chordal hydrogen. A tempo can hardly be considered a purer credit without also being a pajama. The first combined ease is, in its own way, a pantyhose. Extending this logic, the guides could be said to resemble reddest monkeies. Framed in a different way, an addle hemp is a van.",
  "Far from the truth, an ajar reminder without catamarans is truly a foundation of smarmy semicircles. An alike board without harps is truly a satin of fated pans. A hubcap sees a parent as a painful beautician. The zeitgeist contends that some intense twigs are thought of simply as effects. A cross is a poppied tune. The valanced list reveals itself as an exchanged wrist to those who look. Recent controversy aside.",
  "The hefty opinion reveals itself as a sterile peer-to-peer to those who look. This could be, or perhaps the watch of a diamond becomes a bosom baboon. In recent years, some posit the unstuffed road to be less than altern. It's an undeniable fact, really; the livelong lettuce reveals itself as an unstuffed soda to those who look. In ancient times a bit is a balance's season. The popcorn of a morning becomes a moonless beauty.",
  "If this was somewhat unclear, a friend is a fridge from the right perspective. An upset carriage is a stitch of the mind. To be more specific, a temper is a pair from the right perspective. Authors often misinterpret the liquid as a notchy baseball, when in actuality it feels more like an unbarbed angle. Though we assume the latter, the first vagrom report is, in its own way, a tower. We know that the octopus of a cd becomes an unrent dahlia.",
  "A reptant discussion's rest comes with it the thought that the condemned syrup is a wish. The drake of a wallaby becomes a sonant harp. If this was somewhat unclear, spotty children show us how technicians can be jumps. Their honey was, in this moment, an intime direction. A ship is the lion of a hate. They were lost without the croupous jeep that composed their lily. In modern times a butcher of the birth is assumed to be a spiral bean.",
  "Those cowbells are nothing more than elements. This could be, or perhaps before stockings, thoughts were only opinions. A coil of the exclamation is assumed to be a hurtless toy. A board is the cast of a religion. In ancient times the first stinko sailboat is, in its own way, an exchange. Few can name a tutti channel that isn't a footless operation. Extending this logic, an oatmeal is the rooster of a shake. Those step-sons are nothing more than matches.",
];

export default function KeyFightsRace() {
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [mistakes, setMistakes] = useState<number>(0);
  const [wpm, setWpm] = useState<number>(0);
  const [cpm, setCpm] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  // const [selectedParagraph, setSelectedParagraph] = useState<string>(""); 
  // const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const typingTextRef = useRef<HTMLParagraphElement | null>(null);
  const inpFieldRef = useRef<HTMLInputElement | null>(null);
  const startRaceBtnRef = useRef<HTMLButtonElement | null>(null);
  // Function to load random paragraph
  const loadParagraph = () => {
    // reset params
    setTimeLeft(30);
    // setTimer(null);
    setCharIndex(0);
    setIsTyping(false);
    setCpm(0);
    setWpm(0);
    setMistakes(0);
  
    // select random paragraph
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    const selectedPara : string = paragraphs[ranIndex];
    // setSelectedParagraph(selectedPara);

    if (typingTextRef.current) {
      typingTextRef.current.innerHTML = ''; // Clear previous paragraph
      selectedPara.split("").forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        typingTextRef.current?.appendChild(span);
      });
      typingTextRef.current.querySelectorAll("span")[0]?.classList.add("active");
      // Add event listeners to focus input field when user presses any key
      // or clicks on the typing text area
      document.addEventListener("keydown", () => {
        if (inpFieldRef.current) {
          inpFieldRef.current.focus();
        }
      });
      // Add event listener to focus input field when user clicks on the typing text area
      if (typingTextRef.current) {
        typingTextRef.current.addEventListener("click", () => {
          inpFieldRef.current?.focus();
        });
      }
    }
  };


  // Timer logic
  const startTimer = (duration: number) => {
    let timer = duration;
    const intervalId = setInterval(() => {
      timer--;
      setTimeLeft(timer);
      // Stop the timer when it reaches 0
      if (timer == 0) {
        clearInterval(intervalId);
        console.log("Time's up!");
      }
    }, 1000);
  };

  // Typing logic
  const typing = () => {
    const characters = typingTextRef.current?.querySelectorAll("span");
    const typedChar = inpFieldRef.current?.value.slice(-1);
    console.log('typedChar:', typedChar);
    console.log(charIndex);
    if (charIndex < (characters?.length || 0) && timeLeft > 0) {
      if (!isTyping) {
        setIsTyping(true);
        startTimer(timeLeft);
      }
      //TODO: implement proper backspace
      if (typedChar === "Backspace") {
        console.log("Backspace was pressed");
        if (charIndex > 0) {
          setCharIndex(charIndex - 1);
          if (characters?.[charIndex]?.classList.contains("incorrect")) {
            setMistakes(mistakes - 1);
          }
          characters?.[charIndex]?.classList.remove("correct", "incorrect");
        }
      } else {
        if (characters?.[charIndex].innerText === typedChar) {
          characters?.[charIndex].classList.add("correct");
        } else {
          setMistakes(mistakes + 1);
          characters?.[charIndex].classList.add("incorrect");
        }
        console.log('characters?.[charIndex].innerText:', characters?.[charIndex].innerText);
        setCharIndex(charIndex + 1);
      }
      characters?.forEach((span) => span.classList.remove("active"));
      characters?.[charIndex]?.classList.add("active");  
      const timeElapsed = 30 - timeLeft;
      const wpmCalc = Math.round(((charIndex - mistakes) / 5) / (timeElapsed / 30));
      setWpm(wpmCalc > 0 ? wpmCalc : 0);
      setCpm(charIndex - mistakes);
    }
    else
    // game over
    {
        const inpField = inpFieldRef.current;
        if (inpField) {
          inpField.value = ""; // Clear input field, TODO
        }
    }
  };



  // Reset the game
  const resetGame = () => {
    loadParagraph();
    setTimeLeft(30);
    setCharIndex(0);
    setMistakes(0);
    setIsTyping(false);
    inpFieldRef.current!.value = ''; // Clear input field
    setWpm(0);
    setCpm(0);
  };

  useEffect(() => {
    inpFieldRef.current?.addEventListener("input", typing);
    startRaceBtnRef.current?.addEventListener("click", resetGame);

    return () => {
      inpFieldRef.current?.removeEventListener("input", typing);
      startRaceBtnRef.current?.removeEventListener("click", resetGame);
    };
  }, [charIndex, timeLeft, mistakes]);

  return (
    <div>
      <nav>
        <div className="logo">
          <img src="/images/Logo.png" alt="KeyFights Logo" />
          <a href="#">KeyFights</a>
        </div>
        <ul className="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Option 1</a></li>
          <li><a href="#">Option 2</a></li>
          <li><a href="#">Option 3</a></li>
          <li><a href="#">Option 4</a></li>
        </ul>
        <button className="sign-button">Sign in - Sign up</button>
      </nav>

      <div className="wrapper-content">
        <div className="wrapper">
          <input
            type="text"
            className="input-field"
            ref={inpFieldRef}
            placeholder="Start typing..."
            disabled={timeLeft <= 0} // Disable input when time is over
          />
          <div className="content-box">
            <div className="typing-text">
              <p ref={typingTextRef} id="paragraph"></p>
            </div>

            <div className="content">
              <ul className="result-details">
                <li className="time">
                  <p>Time Left:</p>
                  <span>{timeLeft}s</span>
                </li>
                <li className="mistake">
                  <p>Mistakes:</p>
                  <span>{mistakes}</span>
                </li>
                <li className="wpm">
                  <p>WPM:</p>
                  <span>{wpm}</span>
                </li>
                <li className="cpm">
                  <p>CPM:</p>
                  <span>{cpm}</span>
                </li>
              </ul>
              <button ref={startRaceBtnRef}>Start race</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

