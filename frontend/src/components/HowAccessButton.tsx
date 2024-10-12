import { useRouter } from 'next/navigation';
import style from './HowAccessButton.module.scss';
export default function HowAccessButton({ mapaddress }: { mapaddress: string }) {
  const router = useRouter();

  const transpage = () => {
    router.push('https://www.google.com/maps/dir/?api=1&destination=${[' + mapaddress + ']}');
  };

  return (
    <div className={style.btnwrapper}>
      <button onClick={transpage}>アクセス方法を表示</button>
    </div>
  );
}
