import Question from './components/Question';
import Mirror from './components/Mirror';
import Invitation from './components/Invitation';
import Whisper from './components/Whisper';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Question />
      <Mirror />
      <Invitation />
      <Whisper />
    </div>
  );
}
