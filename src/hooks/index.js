import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const useAppDispatch = useDispatch
export const useAppSelectors = useSelector

export function useClickAwayListener (ref, callback, active) {
    useEffect(() => {
        function handleClickOutside (event) {
            if (ref.current && !ref.current.contains(event.target) && active) {
                callback()
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref])
}