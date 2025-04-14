# DatePicker
:::tip[My tip]

Use this awesome feature option

:::

DatePicker to widżet, który pozwala użytkownikowi wybrać datę (dzień, miesiąc, rok). Może działać jako:
- Osadzony widżet w XML (DatePicker) – stały element interfejsu.
- Okno dialogowe (DatePickerDialog) – wyświetlane na żądanie.

## DatePicker

### Nowe opcje:
`android:datePickerMode="calendar" `→ widok kalendarza.
`android:datePickerMode="spinner"` → przewijane listy.

**obsługa wyboru daty**: `setOnDateChangedListener { view, year, month, day -> ... }`

==uwaga==: month + 1 – Android liczy miesiące od 0 (styczeń = 0, luty = 1…).

```
<DatePicker
    android:id="@+id/my_calendar_datepicker"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:datePickerMode="calendar"
    android:layout_margin="10dp"
    android:padding="10dp"
/>
```

obsługa w Kotlinie - wewnątrz metody onCreate
```kotlin
val myDatePickerCalendar: DatePicker = findViewById(R.id.my_calendar_datepicker)
myDatePickerCalendar.setOnDateChangedListener { view, year, monthOfYear, dayOfMonth ->
val selectedDate = "$dayOfMonth/${monthOfYear+1}/$year"
Log.d("test", "$view")
Log.i("test", selectedDate)
}
```

## DatePickerDialog

DatePickerDialog to wersja DatePicker, którą otwieramy na żądanie (np. po kliknięciu przycisku).

Dodajemy Buttona
```
<Button
    android:id="@+id/open_datepicker_button"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Wybierz datę"/>
```
w metodzie onCreate

```
val showDatePickerButton: Button = findViewById(R.id.open_datepicker_button)
showDatePickerButton.setOnClickListener {
showDatePickerDialog()
}
```
w tej samej klasie, ale poza metodą onCreate
```
private fun showDatePickerDialog() {
val calendar = Calendar.getInstance() // tworzy obiekt kalendarz
val year = calendar.get(Calendar.YEAR) // pobiekramy aktualny rok
val month = calendar.get(Calendar.MONTH)
val day = calendar.get(Calendar.DAY_OF_MONTH)


    Log.i("test", "${Calendar.YEAR}")
    Log.i("test", "$year")

    val datePickerDialog = DatePickerDialog(this,{_, selectedYear, selectedMonth, selectedDay ->
        val selectedDate = "$selectedYear/${selectedMonth+1}/$selectedDay"
        Toast.makeText(this, "Wybrano: $selectedDate", Toast.LENGTH_LONG).show()
    }, year, month, day)

    datePickerDialog.show()
}
```

# TimePicker

TimePicker to komponent, który pozwala użytkownikowi wybrać godzinę i minuty.
Może działać w dwóch trybach:

- Jako osadzony widżet w XML (widoczny cały czas)
- Jako TimePickerDialog (okno dialogowe, które pojawia się po kliknięciu)

**opcje dodatkowe**
```
android:timePickerMode="spinner"  – pokazuje tryb przewijania
android:timePickerMode="clock"   – pokazuje zegar (domyślnie)
android:is24HourView="true"             – wymusza 24-godzinny format
```

## TimePicker

```
<TimePicker
    android:id="@+id/spinner_timepicker"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:timePickerMode="spinner"
/>
```
w ciele moetody onCreate
```
val timePicker = findViewById<TimePicker>(R.id.spinner_timepicker)
timePicker.setIs24HourView(true) // Ustawienie trybu 24-godzinnego

timePicker.setOnTimeChangedListener { view, hour, minute ->
val selectedTime = "$hour:$minute"
view.setBackgroundColor(Color.CYAN)// przykład użyciea argumentu view
Toast.makeText(this, "Wybrana godzina: $selectedTime", Toast.LENGTH_SHORT).show()
}
```

## TimePickerDialog
```
<Button
    android:id="@+id/pickTimeBtn"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Pick Time"
    android:layout_margin="20dp"
    android:layout_gravity="center_horizontal"
/>

<TextView
    android:id="@+id/selectedTimeTextView"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Selected Time: -- : --"
    android:layout_margin="20dp"
    android:layout_gravity="center_vertical|center_horizontal"
    android:textSize="30sp"
/>
```

```
class MainActivity : AppCompatActivity() {

    private lateinit var myBtn: Button
    private lateinit var myTextView: TextView

    override fun onCreate(savedInstanceState: Bundle?) {
       //...

        myBtn = findViewById(R.id.pickTimeBtn)
        myTextView = findViewById(R.id.selectedTimeTextView)

        myBtn.setOnClickListener {
            showTimePickerDialog()
        }

    }

    private fun showTimePickerDialog() {
        val calender = Calendar.getInstance()
        val hour = calender.get(Calendar.HOUR_OF_DAY)
        val minute = calender.get(Calendar.MINUTE)

        val timePickerDialog = TimePickerDialog(this, {
            _ : TimePicker, selectedHour: Int, selectedMinute: Int ->
                myTextView.text = "Selected Time: $selectedHour : $selectedMinute "
        }, hour, minute, true)

        timePickerDialog.show()
    }
}
```

# Chronometer

The Chronometer widget in Android is a simple timer that can be used to count up from a base time. It’s useful for things like stopwatch apps.
```
<Chronometer
    android:id="@+id/myChronometr"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:textSize="30sp"
    android:layout_margin="20dp"
    android:layout_gravity="center"
/>

<LinearLayout
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:orientation="horizontal"
    android:gravity="center"
>

    <Button
        android:id="@+id/startButton"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="start"
        android:layout_margin="20dp"
        android:backgroundTint="#123abc"
    />
    <Button
        android:id="@+id/stopButton"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="stop"
        android:layout_margin="20dp"
        android:backgroundTint="#4CAF50"
    />

</LinearLayout>
<Button
    android:id="@+id/resetButton"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="reset"
    android:layout_margin="20dp"
    android:layout_gravity="center"
    android:backgroundTint="#9C27B0"
/>
```

```
class MainActivity : AppCompatActivity() {

    private lateinit var chronometer: Chronometer
    private lateinit var startBtn: Button
    private lateinit var stopBtn: Button
    private lateinit var resetBtn: Button
    private var running = false
    private var pauseOffset: Long = 0


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }
        chronometer = findViewById<Chronometer>(R.id.myChronometr)
        startBtn = findViewById(R.id.startButton)
        stopBtn = findViewById(R.id.stopButton)
        resetBtn = findViewById(R.id.resetButton)


        startBtn.setOnClickListener {

            if (!running) {
                chronometer.base = SystemClock.elapsedRealtime() - pauseOffset
                chronometer.start()
                running = true
            }
        }

        stopBtn.setOnClickListener {
            if (running) {
                pauseOffset = SystemClock.elapsedRealtime() - chronometer.base
                Log.i("offset", "pauseOffset: $pauseOffset")
                chronometer.stop()
                running = false
            }
        }

        resetBtn.setOnClickListener {
            chronometer.base = SystemClock.elapsedRealtime()
            Log.i("offset", "base: ${chronometer.base}")
            pauseOffset = 0
            chronometer.stop()
            running = false
        }
    }
}
```

**SystemClock**
- to klasa w Androidzie, która dostarcza różne metody do mierzenia czasu systemowego.
- Jedną z tych metod jest elapsedRealtime(), która zwraca czas w milisekundach od momentu uruchomienia urządzenia.


`elapsedRealtime()`
`val time = SystemClock.elapsedRealtime()`
- zwraca liczbę milisekund od momentu włączenia urządzenia,
- Ignoruje zmiany czasu systemowego (np. jeśli użytkownik zmieni czas w ustawieniach),
- nie resetuje się przy uśpieniu telefonu – nadal liczy czas.

**pauseOffset**

`private var pauseOffset: Long = 0`
- przechowuje ilość czasu, który upłynął do momentu zatrzymania chronometru
- zapewnia poprawne wznowienie po zatrzymaniu chronometru bez niego timer resetowałby się za każdym razem na 0 po ponownym starcie.


# CounterDownTimer

CountDownTimer to wbudowana klasa w Androidzie, która pozwala na odliczanie czasu w dół – przydatne do np. timerów, liczników czasu, quizów itp.

opis użycia
- Tworzysz obiekt z:
  - czasem trwania (millisInFuture) – ile ma trwać odliczanie,
          interwałem (countDownInterval) – co ile milisekund ma być wywoływana metoda onTick().
  - Po starcie:\
    - `onTick()` – wywoływane co countDownInterval milisekund,
    - `onFinish()` – wywoływane po zakończeniu odliczania.
```
<TextView
    android:id="@+id/timerCounter"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Pozostało 7 sekund"
    android:textSize="30sp"/>
```

```
class MainActivity : AppCompatActivity() {

    lateinit var timerTextView: TextView
    lateinit var mainLayout: LinearLayout

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)
       //...

        timerTextView = findViewById(R.id.timerCounter)
        mainLayout = findViewById(R.id.main)

        val countDownTimer: CountDownTimer = object : CountDownTimer(7000, 1000) {
            override fun onTick(millisUntilFinished: Long) {
                val secondsLeft = millisUntilFinished / 1000
                timerTextView.text = "Pozostało $secondsLeft sekund"
                mainLayout.setBackgroundColor(Color.rgb(
                    Random.nextInt(255),
                    Random.nextInt(255) ,
                    Random.nextInt(255)
                ))

            }

            override fun onFinish() {
                timerTextView.text = "Bomba wybuchła"
                timerTextView.setTextColor(Color.WHITE)
                mainLayout.setBackgroundResource(R.drawable.nuclearbomb)
            }
        }

        countDownTimer.start()
    }
}

```