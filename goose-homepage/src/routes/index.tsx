import App from '#App';
import Home from '#pages/home';
import NewsletterVerifyFail from '#pages/newsletter/verify-fail';
import NewsletterVerifySuccess from '#pages/newsletter/verify-success';
import NotFound from '#pages/not-found';
import TermsOfPrivacy from '#pages/terms-of-privacy';
import TermsOfService from '#pages/terms-of-service';

import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'service-terms', element: <TermsOfService /> },
      { path: 'privacy-terms', element: <TermsOfPrivacy /> },
      {
        path: 'newsletter/verify/success',
        element: <NewsletterVerifySuccess />,
      },
      {
        path: 'newsletter/verify/fail',
        element: <NewsletterVerifyFail />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);