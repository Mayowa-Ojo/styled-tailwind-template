import tw, { styled, theme } from "twin.macro";

import { Button } from "../../components";

export const FormWrapper = styled.div`
   ${tw``}

   width: 420px;
`;

export const FormInputBox = styled.div`
   ${tw`w-full h-10 rounded-md bg-gray-300 flex items-center px-4 py-1 mt-2`}

   transition: box-shadow .2s linear;
   transition: background-color .2s linear;
   &:hover {
      background-color: white;
      border: 1px solid ${theme`colors.gray.400`};
      box-shadow: 0px 0px 0px 4px rgba(125, 124, 228, 0.1);
   }
   &:focus-within {
      background-color: white;
      border: 1px solid ${theme`colors.gray.400`};
      box-shadow: 0px 0px 0px 4px rgba(125, 124, 228, 0.2);
   }
`;

export const FormInput = styled.input`
   ${tw`w-full h-full appearance-none bg-transparent focus:outline-none text-base text-gray-600`}
`;

export const FormLabel = styled.label`
   ${tw`text-base font-semibold text-gray-600`}
`;

export const GoogleButton = styled(Button)`
   ${tw`h-10 flex-grow rounded-md bg-indigo-400 inline-flex items-center justify-center`}
`;

export const TwitterButton = styled(Button)`
   ${tw`bg-gray-400 h-10 px-4 ml-5 rounded-md hover:(bg-gray-400 opacity-75)`}
`;