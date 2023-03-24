import { Button, Input } from '@nextui-org/react';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';

export default function NewsLetterSignUpForm() {
  const inputRef = useRef(null);
  const inputETHRef = useRef(null);
  const [submiting, setSubmiting] = useState(false);

  const subscribeUser = async (e: any) => {
    e.preventDefault();
    setSubmiting(true);
    const loading = toast.loading('Please wait...');
    // this is where your mailchimp request is made
    try {
      //@ts-ignore
      if (!inputRef.current?.value && !inputETHRef.current?.value) {
        toast.error('please input your email or ETH address');
        return;
      }
      //@ts-ignore
      if (inputRef.current?.value) {
        const res = await fetch('/api/create2', {
          body: JSON.stringify({
            //@ts-ignore
            email: inputRef.current.value,
          }),

          headers: {
            'Content-Type': 'application/json',
          },

          method: 'POST',
        });
      }
      //@ts-ignore
      //@ts-ignore
      if (inputETHRef.current?.value || inputRef.current?.value) {
        const res = await fetch('/api/createNotion', {
          body: JSON.stringify({
            //@ts-ignore
            address: inputETHRef.current.value,
            //@ts-ignore
            email: inputRef.current?.value,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        });
        const json = await res.json();
        if (json.error) {
          throw new Error(json.error);
        }
      }

      toast.success('You are now on the waitlist!');
    } catch (e: any) {
      toast.error(e.message);
    }
    toast.dismiss(loading);
    setSubmiting(false);
  };
  const [count, setCount] = useState(0);
  async function getCount() {
    const res = await fetch('/api/count', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    });
    const json = await res.json();
    setCount(json.count);
    return json;
  }

  useEffect(() => {
    getCount();
  }, []);
  return (
    <form
      onSubmit={subscribeUser}
      style={{
        textAlign: 'center',
      }}
    >
      <label
        htmlFor="email-input"
        className="form__label"
        style={{
          lineHeight: '2',
        }}
      >
        We have started the development of waitlist.wtf
        <br />
        it will be available soon
        <br />{' '}
        <span style={{ color: '#333', fontWeight: 'bold', fontSize: '18px' }}>
          So, join the waitlist of waitlist.wtf first
        </span>
        <br /> we will notify you when the product is ready
        <br />
        <span style={{ color: '#999' }}>
          only{' '}
          <span style={{ color: '#333', fontWeight: 'bold' }}>{count}</span>{' '}
          people are waiting
        </span>
        <br />
        <span style={{ color: '#999' }}>{"don't fomo please~~"}</span>
      </label>
      <div
        style={{
          margin: '20px 0',
        }}
      >
        <Input
          type="email"
          id="email-input"
          name="email"
          placeholder="Your lovely email"
          ref={inputRef}
          autoCapitalize="off"
          autoCorrect="off"
          style={{
            width: '250px',
            textAlign: 'center',
          }}
        />
      </div>
      <div
        style={{
          margin: '10px 0',
        }}
      >
        <Input
          id="email-input"
          name="email"
          placeholder="Your lovely ETH address,not required"
          ref={inputETHRef}
          autoCapitalize="off"
          autoCorrect="off"
          style={{
            width: '300px',
            textAlign: 'center',
          }}
        />
      </div>
      <div
        style={{
          margin: '30px 0',
        }}
      >
        <Button
          type="submit"
          value=""
          name="subscribe"
          style={{
            margin: '0 auto',
          }}
          rounded
          size="md"
          disabled={submiting}
        >
          Join the waitlist
        </Button>
      </div>
    </form>
  );
}
