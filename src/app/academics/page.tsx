import React from 'react';
import ProfileLayout from '../../layouts/ProfileLayout';
import "./academics.scss"
import GenericChart2 from '../../components/charts/MultiSeriesChart';
import GenericChart from '../../components/charts/GenericChart';

export default function AcademicsPage() {
  return (
    <ProfileLayout>
      <div className="academics-container">
        <section className="background">
          <span className="bg-banner" />
          <span className="bg-lockers" />
          <span className="bg-title" />
        </section>

        <section className="academics-section">

          {/* Grades */}
          <h2 className="section-title">University Grades</h2>
          <p className="section-subtitle">Academic victims? Academic weapons? Why not both?</p>
          <GenericChart2
            title="What was your Fall vs Winter grade average?"
            subtitle="number of respondents: 38"
            dataUrl="/data/academics/averages.csv"
            chartType="LineChart"
            xAxisLabel="Person"
            yAxisLabel="Term Average"
            multiSeries={true}
            options={{
              legend: { 
                position: 'top',
                alignment: 'center',
                textStyle: {
                  fontSize: 14,
                  color: '#333'
                }
              },
              colors: ['#5DADE2', '#2C3E50'], 
              pointSize: 5,
              lineWidth: 2,
              chartArea: {
                left: 80,
                top: 80,
                width: '80%',
                height: '70%'
              },
              hAxis: {
                title: 'Person',
                titleTextStyle: {
                  fontSize: 12,
                  color: '#666'
                },
                textStyle: {
                  fontSize: 10,
                  color: '#666'
                },
                gridlines: {
                  color: '#E0E0E0',
                  count: 10
                }
              },
              vAxis: {
                title: 'Term Average',
                titleTextStyle: {
                  fontSize: 12,
                  color: '#666'
                },
                textStyle: {
                  fontSize: 10,
                  color: '#666'
                },
                viewWindow: {
                  min: 65,
                  max: 100,
                },
                gridlines: {
                  color: '#E0E0E0',
                  count: 8
                }
              },
              titleTextStyle: {
                fontSize: 18,
                color: '#000',
                bold: true
              }
            }}
          />

          {/* Most and least useful courses */}
          <h2 className="section-title">Most and Least Useful Courses</h2>
          <p className="section-subtitle">Turns out, some courses weren't just academic trauma</p>
          <GenericChart2
            title="Least vs. Most Useful Courses"
            subtitle="number of respondents: 42"
            dataUrl="/data/academics/useful-courses.csv"
            chartType="BarChart"
            xAxisLabel="Number of People"
            yAxisLabel="Course"
            multiSeries={true}
            options={{
              legend: { position: 'top', alignment: 'center', textStyle: { fontSize: 14, color: '#333' } },
              colors: ['#5DADE2', '#2C3E50'],
              chartArea: { left: 80, top: 80, width: '80%', height: '70%' },
              hAxis: {
                title: 'Number of People',
                titleTextStyle: { fontSize: 12, color: '#666' },
                textStyle: { fontSize: 10, color: '#666' },
                gridlines: { color: '#E0E0E0', count: 10 }
              },
              vAxis: {
                title: 'Course',
                titleTextStyle: { fontSize: 12, color: '#666' },
                textStyle: { fontSize: 10, color: '#666' }
              },
              titleTextStyle: { fontSize: 18, color: '#000', bold: true }
            }}
          />

          {/* Most interesting and boring courses */}
          <h2 className="section-title">Most Interesting and Most Boring Courses</h2>
          <p className="section-subtitle">Catching up on sleep &gt; Going to MSE 131 at 9:00 AM</p>
          <GenericChart2
            title="Most Boring vs. Most Interesting Courses"
            subtitle="number of respondents: 42"
            dataUrl="/data/academics/boring-courses.csv"
            chartType="BarChart"
            xAxisLabel="Number of People"
            yAxisLabel="Course"
            multiSeries={true}
            options={{
              legend: { position: 'top', alignment: 'center', textStyle: { fontSize: 14, color: '#333' } },
              colors: ['#5DADE2', '#2C3E50'],
              chartArea: { left: 80, top: 80, width: '80%', height: '70%' },
              hAxis: {
                title: 'Number of People',
                titleTextStyle: { fontSize: 12, color: '#666' },
                textStyle: { fontSize: 10, color: '#666' },
                gridlines: { color: '#E0E0E0', count: 10 }
              },
              vAxis: {
                title: 'Course',
                titleTextStyle: { fontSize: 12, color: '#666' },
                textStyle: { fontSize: 10, color: '#666' }
              },
              titleTextStyle: { fontSize: 18, color: '#000', bold: true }
            }}
          />

          {/* mgte's favs */}
          <h2 className="section-title">MGTE's Favourites</h2>
          <p className="section-subtitle">The things that made our days in the dungeons of RCH a bit more bearable &lt;3 </p>
          <div className="charts-row">
            <GenericChart
              title="What was your favorite course?"
              dataUrl="/data/academics/fav-courses.csv"
              chartType="BarChart"
              xAxisLabel='Course'
              yAxisLabel='Number of People'
              options={{ 
                legend: { position: 'none' },
                colors: ['#4D81B1'],
              }}
            />
            <GenericChart
              title="Favourite Room in RCH?"
              dataUrl="/data/academics/fav-room.csv"
              chartType="PieChart"
              options={{ 
                colors: ['#2D5B8E', '#9DCAF3'],
              }}
            />
          </div>

          {/* Aftermath of physics */}
          <h2 className="section-title">Aftermath of Physics</h2>
          <p className="section-subtitle">The exam that made us question everything, but our Physics prof ended up coming in clutch.</p>
          <GenericChart
            title="How much did your PHYS 115 Final Exam Mark increase after scale (%)"
            subtitle="number of respondents: 38"
            dataUrl='/data/academics/physics.csv'
            chartType="PieChart"
            options={{ 
              colors: ['#D2E6FD', '#132D47', '#4D81B1', '#1D3E62', '#9DCAF3'],
            }}
          />

          {/* Preferred tech */}
          <h2 className="section-title">MGTE's Preferred Tech</h2>
          <p className="section-subtitle">Call us the Lorax cause MGTE is saving the trees.</p>
          <div className="charts-row">
            <GenericChart
              title="iPad vs Paper for Taking Notes?"
              subtitle="number of respondents: 44"
              dataUrl="/data/academics/ipad-vs-paper.csv"
              chartType="PieChart"
              options={{ 
                colors: ['#2D5B8E', '#9DCAF3'],
              }}
            />
            <GenericChart
              title="What operating system do you use?"
              subtitle="number of respondents: 44"
              dataUrl="/data/academics/os.csv"
              chartType="PieChart"
              options={{ 
                colors: ['#2D5B8E', '#9DCAF3'],
              }}
            />
          </div>

          {/* Attendance */}
          <h2 className="section-title">Attendance Rates</h2>
          <p className="section-subtitle">No iClicker? Say less.</p>
          <div className="charts-row">
            <GenericChart
              title="On a scale of 1-10, how often did you attend office hours?"
              subtitle="number of respondents: 43"
              dataUrl="/data/academics/office-hours.csv"
              chartType="ColumnChart"
              yAxisLabel='Number of People'
              xAxisLabel='Scale'
              options={{ 
                legend: { position: 'none' },
                colors: ['#2D5B8E'],
              }}
            />
            <GenericChart
              title="On a scale of 1-10, how often do you attend lectures?"
              subtitle="number of respondents: 43"
              dataUrl="/data/academics/lectures.csv"
              chartType="ColumnChart"
              yAxisLabel='Number of People'
              xAxisLabel='Scale'
              options={{ 
                legend: { position: 'none' },
                colors: ['#2D5B8E',]
              }}
            />
          </div>

          {/* Studiousness  of MGTE */}
          <h2 className="section-title">How Studious is MGTE '29</h2>
          <p className="section-subtitle">Late nights, what's' the price?</p>
          <div className="charts-row">
            <GenericChart
              title="On average, how many hours did you study per day?"
              subtitle="number of respondents: 43"
              dataUrl="/data/academics/hours.csv"
              chartType="ColumnChart"
              yAxisLabel='Number of People'
              xAxisLabel='Hours'
              options={{ 
                legend: { position: 'none' },
                colors: ['#2D5B8E'],
              }}
            />
            <GenericChart
              title="How many all-nighters did you pull this year?"
              subtitle="number of respondents: 42"
              dataUrl="/data/academics/all-nighters.csv"
              chartType="PieChart"
              options={{ 
                colors: [ '#132D47', '#4D81B1', '#1D3E62', '#9DCAF3'],
              }}
            />
          </div>

          {/* Extracurriculars */}
          <h2 className="section-title">Extracurriculars</h2>
          <p className="section-subtitle">Shoutout Industry 4.0 Design Team ⚙️📢‼️</p>
          <GenericChart
            title="How many extracurriculars are you in?"
            subtitle="number of respondents: 41"
            dataUrl='/data/academics/extracurriculars.csv'
            chartType="PieChart"
            options={{ 
              colors: ['#D2E6FD', '#132D47', '#4D81B1', '#1D3E62', '#9DCAF3'],
            }}
          />

          {/* Higher education */}
          <h2 className="section-title">Pursuing Higher Education</h2>
          <p className="section-subtitle">Because five years just wasn't enough.</p>
          <GenericChart
            title="Are you interested in doing a Masters or pursuing higher education?"
            subtitle="number of respondents: 43"
            dataUrl='/data/academics/higher-edu.csv'
            chartType="PieChart"
            options={{ 
              colors: ['#132D47', '#4D81B1', '#9DCAF3'],
            }}
          />

          {/* Fake eng */}
          <h2 className="section-title">Least "Engineering" Eng Program</h2>
          <p className="section-subtitle">Let's refute the allegations...which eng is the FAKEST?</p>
          <GenericChart
            title="What's the fakest engineering program?"
            subtitle="number of respondents: 40"
            dataUrl='/data/academics/fake-eng.csv'
            chartType="BarChart"
            yAxisLabel="Engineering Program"
            xAxisLabel="Number of People"
            options={{ 
              legend: { position: 'none' },
              colors: ['#4D81B1'],
            }}
          />

          {/* Prof quotes */}
          <h2 className="section-title">Best Professor Quotes</h2>
          <p className="section-subtitle">Zero Context</p>
          <img src="/academics/prof-quotes.png" alt="Prof Quotes" className="academics-imgs"/>

          {/* Rating classes */}
          <h2 className="section-title">Rating Our Classes</h2>
          <p className="section-subtitle">The radar charts represent a course's rating with 1 - Terrible,  5 - Awesome where 1A - Purple, 1B - Blue.</p>
          <img src="/academics/1a.png" alt="1A Classes" className="academics-imgs"/>
          <img src="/academics/1b.png" alt="1B Classes" className="academics-imgs"/>

          {/* Habits vs academics */}
          <h2 className="section-title">Habits vs. Academic Performance</h2>
          <p className="section-subtitle">Turns out more sleep equals higher grades!</p>
          <GenericChart2
            title="How do our daily habits relate to our grades?"
            subtitle="number of respondents: 15"
            dataUrl='/data/academics/habits.csv'
            chartType="LineChart"
            xAxisLabel="Grade Range"
            yAxisLabel="Hours"
            multiSeries={true}
            options={{ 
              colors: ['#132D47', '#4D81B1', '#9DCAF3'],
              lineWidth: 4,
            }}
          />
        </section>

        {/* Buttons */}
        <div className="nav-buttons">
          <a href="/demographics" className="nav-btn gallery-btn">
            &larr; Demographics
          </a>
          <a href="/lifestyle" className="nav-btn about-btn">
            Lifestyle &rarr;
          </a>
        </div>

      </div>
    </ProfileLayout>
  );
}
